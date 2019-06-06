import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { stringToUrl } from '../../utils/stringToUrl';
import Diagram from '../Diagram/Diagram';
import PropTypes from 'prop-types';
import categories from '../../fixtures/categories';
import './Sidebar.scss';

class Sidebar extends React.Component {
    static propTypes = {
        location: PropTypes.object,
        match: PropTypes.object
    };

    state ={
        categories: categories.map(c => ({
            ...c,
            url: stringToUrl(c.name),
            pages: c.pages ? c.pages.map(p => ({
                ...p,
                url: `${stringToUrl(c.name)}/${stringToUrl(p.name)}`
            })) : null,
            expanded: false,
            active: false
        }))
    };

    getActiveCategory(categories = this.state.categories) {
        // if (this.props.location.params)
        console.log(this.props.history);
        return categories.find((category) => this.props.location.pathname.indexOf(stringToUrl(category.name)) >= 0);
    }

    expandCategory(at, expand = true) {
        const categories = [...this.state.categories];
        categories[at].expanded = expand;
        this.setState({categories})
    }

    renderPage(page, index, categoryIndex) {
        return (
            <li key={`sidebar-page-${index}-${categoryIndex}`} className="page-link">
                <NavLink to={`/${page.url}`} activeClassName={'active'} activeStyle={{backgroundColor: this.state.categories[categoryIndex].color}}>
                    {page.name}
                </NavLink>
            </li>
        )
    }

    renderCategory(category, i) {
        return (
            <li key={`sidebar-category-${i}`} className="category-link">
                {category.pages ? (<button onClick={() => this.expandCategory(i, !category.expanded)}>&gt;</button>) : ''}
                <NavLink to={`/${category.url}`}
                         activeClassName={'active'}>
                    {category.name}
                </NavLink>
                {category.pages && category.expanded ? (
                    <ul className="pages-list">
                        {category.pages.map((p, j) => this.renderPage(p, j, i))}
                    </ul>
                ) : ''}
            </li>
        )
    }

    render() {
        console.log(this.props.location, this.props.match);

        const activeCategory = this.getActiveCategory();

        if (activeCategory) {
            activeCategory.expanded = true;
        }

        return (
            <div className="Sidebar">
                <Diagram/>
                <ul className="categories-list">
                    {this.state.categories.map(this.renderCategory.bind(this))}
                </ul>
            </div>
        )
    }
}

export default withRouter(Sidebar);