import React from 'react';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import stats from '../../dist/react-loadable.json';
import Routes from '../common/routes';
import { isDev } from '../utils/isDev';

export default (req, store, context) => {
  let modules = [];
  const content = renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <Provider store={ store }>
        <StaticRouter location={ req.path } context={ context }>
          { renderRoutes(Routes) }
        </StaticRouter>
      </Provider>
    </Loadable.Capture>
  );

  const bundles = getBundles(stats, modules);
  const scripts = bundles.filter(bundle => bundle.file.endsWith('.js'));
  const helmet = Helmet.renderStatic();
  const fileName = bundles[0].file;
  const hash = isDev() ? '' : `.${fileName.split('.')[1]}`;

  return `
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png">
          <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png">
          <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png">
          <link rel="manifest" href="/public/site.webmanifest">
          <link rel="mask-icon" href="/public/safari-pinned-tab.svg" color="#5bbad5">
          <meta name="msapplication-TileColor" content="#da532c">
          <meta name="theme-color" content="#ffffff">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          <link rel="stylesheet" type="text/css" href="/main${hash}.css" />
        </head>
        <body>
          <div id="root">${ content }</div>
          <script>window.INITIAL_STATE = ${ serialize(store.getState()) }</script>
          <script src="/vendor${hash}.js"></script>
          ${scripts.map(script => `<script src="/${script.file}"></script>`).join('\n')}
          <script src="/main${hash}.js"></script>
        </body>
      </html>
  `;
};
