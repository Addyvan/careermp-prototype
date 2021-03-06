import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import store from "./store";

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n'; // initialized i18next instance

import { ApolloProvider } from 'react-apollo';
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

ReactDOM.render(
  <Provider store={ store }>
    <I18nextProvider i18n={ i18n }>
      <ApolloProvider client={ client }>
        <App />
      </ApolloProvider>
    </I18nextProvider>
  </Provider>,  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();