import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

import UIKit from 'uikit/dist/js/uikit';
import UIKitIcons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.min.css';


import './index.css';
import App from './App';
import { apolloClient } from './utils';
import reportWebVitals from './reportWebVitals';
UIKit.use(UIKitIcons);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
