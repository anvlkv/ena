import React from 'react';
import './Page.scss';
import PropTypes from 'prop-types';
import pages from '../../fixtures/pages';
import { stringToUrl } from '../../utils/stringToUrl';

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
                <a target="_blank" href={doc.url}>
                    {doc.name}
                </a>
            </li>
        )
    }

    render () {
        return (
            <article className="Page">
                <h2>{this.state.page.name}</h2>
                <p className="lead">{this.state.page.intro}</p>
                <img className="page-cover-image"
                     src={require(`../../assets/images/categories/${this.state.page.cover}`)}
                     alt={this.state.page.coverAlt || this.state.page.name}/>
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
