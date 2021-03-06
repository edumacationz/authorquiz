import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import AddAuthorForm from './AddAuthorForm';

import * as ReactRedux from 'react-redux';

import store from './store';

ReactDOM.render(
  <BrowserRouter>
    <ReactRedux.Provider store={store}>
      <>
        <Route exact path="/" component={AuthorQuiz} />
        <Route exact path='/add' component={AddAuthorForm} />
      </>
    </ReactRedux.Provider>
  </BrowserRouter>
  , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
