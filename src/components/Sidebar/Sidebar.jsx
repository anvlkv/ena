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
            expanded: false
        }))
    };

    getActiveCategory(categories = this.state.categories) {
        return categories.find(c => c.url === this.props.location.pathname ||
            (c.pages && c.pages.find(p => p.url === this.props.location.pathname))) || {};
    }

    expandCategory(at, expand = true) {
        const categories = [...this.state.categories];
        categories[at].expanded = expand;
        this.setState({categories})
    }

    renderPage(page, j, i) {
        return (
            <li key={`sidebar-page-${j}-${i}`} className="page-link">
                <NavLink to={`/${page.url}`} activeClassName={'active'}>
                    {page.name}
                </NavLink>
            </li>
        )
    }

    renderCategory(category, i) {
        return (
            <li key={`sidebar-category-${i}`} className="category-link">
                {category.pages ? (<button onClick={() => this.expandCategory(i, !category.expanded)}>&gt;</button>) : ''}
                <NavLink to={`/${category.url}`} activeClassName={'active'}>
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
                <h3>{activeCategory.name}</h3>
                <ul className="categories-list">
                    {this.state.categories.map(this.renderCategory.bind(this))}
                </ul>
            </div>
        )
    }
}

export default withRouter(Sidebar);