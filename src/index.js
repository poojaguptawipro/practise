import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/app';
import reducers from './reducers';
import promiseMiddleware from 'redux-promise';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import PostNew from './container/postnew';


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <MuiThemeProvider>
  <BrowserRouter>
    <Switch>
    <Route path='/app' component ={App} />
    <Route path='/postnew' component ={PostNew}/>
    </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
  </Provider>
  , document.querySelector('.container'));
