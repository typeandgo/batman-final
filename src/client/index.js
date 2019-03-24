import '@babel/polyfill/noConflict';
import '../styles/app.scss';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import Routes from 'Common/routes';
import store from 'Common/store';

Loadable.preloadReady().then(() => {
  hydrate(
    <Provider store={ store }>
      <BrowserRouter>
        { renderRoutes(Routes) }
      </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
  );
});
