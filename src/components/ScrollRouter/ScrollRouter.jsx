import PropTypes from 'prop-types';
import React from 'react';
import './ScrollRouter.scss';
import { withRouter } from 'react-router';

class ScrollRouter extends React.Component{
    static propTypes = {
        location: PropTypes.object,
        history: PropTypes.object,
        style: PropTypes.object,
        onRouteChange: PropTypes.func
    };

    routedChildren = [];

    containerRef = React.createRef();

    state = {
        activeChild: ''
    };

    static getDerivedStateFromProps(props, state) {
        state.activeChild = props.match.url;
        return state;
    }

    renderChild(child, i) {
        if (!this.routedChildren[i]) {
            this.routedChildren[i] = { ref: React.createRef() };
        }

        this.routedChildren[i].child = child;

        return (
            <div key={`scroll-router-child-${i}`} className="router-child" ref={this.routedChildren[i].ref}>
                {child}
            </div>
        )
    }

    handleScroll(e) {
        if (this.skipScrollEvent) {
            clearTimeout(this.skipScrollEvent);
            this.skipScrollEvent = setTimeout(() => {
                requestAnimationFrame(() => {
                    this.skipScrollEvent = false;
                });
            }, 100);
            return;
        }

        const scrollPosition = this.containerRef.current.scrollTop + this.containerRef.current.offsetTop;

        let activeRouteIndex = this.routedChildren.map(ch => ch.ref).findIndex(({current}, at) => {
            return current.offsetTop <= scrollPosition &&
                current.offsetTop + current.scrollHeight >= scrollPosition;
        });

        activeRouteIndex = activeRouteIndex < 0 ? 0 : activeRouteIndex;

        const route = this.routedChildren[activeRouteIndex].child.props.route;

        if (route !== this.state.activeChild) {
            this.setState({activeChild: route});
            this.props.history.replace(route);
            if (this.props.onRouteChange) {
                this.props.onRouteChange(route);
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.url !== prevProps.match.url) {
            this.scrollToActiveChild();
        }
    }

    componentDidMount(){
        this.scrollToActiveChild();
    }

    scrollToActiveChild() {
        const activeChild = this.routedChildren.find(ch => ch.child.props.route === this.state.activeChild);
        if (activeChild) {
            this.skipScrollEvent = setTimeout(() => {
                requestAnimationFrame(() => {
                    this.skipScrollEvent = false;
                });
            }, 100);
            this.containerRef.current.scrollTop = activeChild.ref.current.offsetTop;
        }
    }

    render () {
        if (this.routedChildren.length > this.props.children.length) {
            this.routedChildren = [];
        }

        return (
            <div className="ScrollRouter" style={this.props.style} onScroll={this.handleScroll.bind(this)}>
                <div className="routes-container" ref={this.containerRef}>
                    {this.props.children.reduce((acc, ch, at, all) => {
                        if (ch instanceof Array) {
                            acc = acc.concat(ch);
                        }
                        else {
                            acc.push(ch);
                        }
                        return acc;
                    }, []).map(this.renderChild.bind(this))}
                </div>
            </div>
        )
    }
}

export default withRouter(ScrollRouter);