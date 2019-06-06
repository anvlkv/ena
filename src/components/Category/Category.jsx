import React from 'react';
import PropTypes from 'prop-types';
import './Category.scss';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { stringToUrl } from '../../utils/stringToUrl';

class Category  extends React.Component{
    static propTypes = {
        category: PropTypes.object,
        location: PropTypes.object
    };

    renderPageThumbnail(page, i) {
        const pageUrl = `${this.props.location.pathname}/${stringToUrl(page.name)}`;
        return (
            <li className="page-thumbnail" key={`page-thumbnail-${i}`}>
                <Link to={pageUrl} style={{backgroundColor: this.props.category.color}}>
                    <img src={require(`../../assets/images/pages/${page.cover}`)} alt={page.coverAlt}/>
                    <p>{page.name}</p>
                </Link>
            </li>
        )
    }

    render() {
        const categoryName = stringToUrl(this.props.category.name);

        return (
            <article className={`Category ${categoryName}`} id={categoryName}>
                <h3>{this.props.category.name}</h3>
                <p className="lead">{this.props.category.intro}</p>
                <div className="cover" style={{backgroundColor: this.props.category.color}}>
                    <img width="960" height="700"
                         className="category-cover-image"
                         src={require(`../../assets/images/categories/${this.props.category.cover}`)}
                         alt={this.props.category.coverAlt || this.props.category.name}/>
                </div>
                <div className="category-description" dangerouslySetInnerHTML={{__html: this.props.category.description}}/>
                {this.props.category.pages ? (
                    <ul className="pages-list">
                        {this.props.category.pages.map(this.renderPageThumbnail.bind(this))}
                    </ul>
                ) : ''}
            </article>
        )
    }
}

export default withRouter(Category);