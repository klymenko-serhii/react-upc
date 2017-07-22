import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

/* Components */
import Users from './components/users';
import Posts from './components/posts';
import Comments from './components/comments';

import rootReducer from './reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const root = (
    <Provider store={store} >
        <Router>
            <Switch>
                <Route exact path='/users' component={Users} />
                <Route exact path='/users/:userId/posts' component={Posts} />
                <Route exact path='/users/:userId/posts/:postId/comments' component={Comments} />
                <Route path='*' render={ () => (<Redirect to='/users' />) } />
            </Switch>
        </Router>
    </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();
