import React from 'react';
import { Route, Router, Switch } from 'react-router';
import logo from './assets/images/logo.svg';
import './App.scss';
import Category from './components/Category/Category';
import Page from './components/Page/Page';
import ScrollRouter from './components/ScrollRouter/ScrollRouter';
import Landing from './components/Landing/Landing';
import { createBrowserHistory } from 'history';
import Sidebar from './components/Sidebar/Sidebar';
import categories  from './fixtures/categories';
import { stringToUrl } from './utils/stringToUrl';

const history = createBrowserHistory();

class App extends React.Component {

    state = {
        hideSidebar: true
    };

    componentDidMount() {
        this.setState({hideSidebar: history.location.pathname === '/'})
    }

    render() {
        console.log(categories);
        return (
            <div className="App">
                <header className="App-header">
                    <h1>
                        <a href={'/'} title="ENA">
                            <img src={logo} className="App-logo" alt="ENA" />
                        </a>
                    </h1>
                </header>
                <Router history={history}>
                    <div className="page-layout">
                        <aside className={this.state.hideSidebar ? 'hidden' : 'visible'}>
                            <Sidebar/>
                        </aside>
                        <main>
                            <Switch>
                                <Route exact path="/:category?" render={() => {
                                    return (
                                        <ScrollRouter onRouteChange={this.handleRouteChange.bind(this)}>
                                            <Landing route=""/>
                                            {categories.map((c, i) => (
                                                <Category key={`category-${i}`} category={c} route={`/${stringToUrl(c.name)}`}/>
                                            ))}
                                        </ScrollRouter>
                                    );
                                }}/>
                                <Route exact path="/:category/:page" component={Page}/>
                            </Switch>
                        </main>
                    </div>
                </Router>
            </div>
        );
    }

    handleRouteChange(route) {
        this.setState({hideSidebar: route === ''});
    }
}

export default App;
