import React from 'react';
import './Page.scss';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import pages from '../../fixtures/pages';
import { stringToUrl } from '../../utils/stringToUrl';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class Page extends React.Component {
    static propTypes = {
        match: PropTypes.object,
    };

    static getDerivedStateFromProps(props, state) {
        state.page = pages.find(p => stringToUrl(p.name) === props.match.params.page);
        return state;
    }

    state = {
        page: null
    };

    renderDocumentThumbnail(doc, i) {
        return (
            <li key={`page-doc-thumbnail-${i}`}>
                <a target="_blank" href={doc.url} rel="noopener noreferrer">
                    {doc.name}
                </a>
            </li>
        )
    }

    render () {
        return (
            <article className="Page">
                <h2>{this.state.page.name}</h2>
                <p className="lead">{this.state.page.lead}</p>
                <Carousel showThumbs={false} infiniteLoop={true}>
                    {(this.state.page.images || []).reduce((acc, slide, at, all) => {
                        acc.push(
                            <img key={`page-image-${at + 1}`}
                                 alt={this.state.page.name}
                                 className="page-cover-image"
                                 src={require(`../../assets/images/pages/${slide}`)}/>);
                        return acc;
                    }, [
                        <img key={'page-image-1'}
                             className="page-cover-image"
                             src={require(`../../assets/images/pages/${this.state.page.cover}`)}
                             alt={this.state.page.coverAlt || this.state.page.name}/>
                    ])}
                </Carousel>
                <div className="primary-content-layout">
                    <div className="page-description" dangerouslySetInnerHTML={{__html: this.state.page.description}}/>
                    {this.state.page.documents ? (
                        <ul className="items-list">
                            {this.state.page.documents.map(this.renderDocumentThumbnail.bind(this))}
                        </ul>
                    ) : ''}
                </div>
            </article>
        );
    }
}

export default Page;
