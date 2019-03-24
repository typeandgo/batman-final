import '@babel/polyfill/noConflict';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Routes from 'Common/routes';
import store from 'Common/store';
import renderer from './renderer';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('dist'));
app.use('/public', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('*', async (req, res) => {
  const branch = matchRoutes(Routes, req.path);
  const promises = branch.map(({ route, match }) => (route.loadData ? route.loadData(store, match.params) : Promise.resolve(null)));

  await Promise.all(promises);
  
  const context = {};
  const content = renderer(req, store, context);

  if (context.notFound) {
    res.status(404);
  }

  res.send(content);
});

Loadable.preloadAll().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
});
