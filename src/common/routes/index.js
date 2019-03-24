import React from 'react';
import Loadable from 'react-loadable';
import { loadDataHome } from 'Common/pages/Home';
import { loadDataSeason } from 'Common/pages/Season';
import { loadDataEpisode } from 'Common/pages/Episode';

const loading = () => (<div>Loading...</div>);
const App = Loadable({ loader: () => import(/* webpackChunkName: "app" */'Common/components/App'), loading });
const Home = Loadable({ loader: () => import(/* webpackChunkName: "home" */'Common/pages/Home'), loading });
const About = Loadable({ loader: () => import(/* webpackChunkName: "about" */'Common/pages/About'), loading });
const Episode = Loadable({ loader: () => import(/* webpackChunkName: "episode" */'Common/pages/Episode'), loading });
const Season = Loadable({ loader: () => import(/* webpackChunkName: "season" */'Common/pages/Season'), loading });
const NotFound = Loadable({ loader: () => import(/* webpackChunkName: "notFound" */'Common/pages/NotFound'), loading });

export default [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
        loadData: loadDataHome
      },
      {
        path: '/about',
        component: About
      },
      {
        path: '/season/:id',
        component: Season,
        loadData: loadDataSeason
      },
      {
        path: '/episode/:id',
        component: Episode,
        loadData: loadDataEpisode
      },
      {
        component: NotFound
      }
    ]
  }
];
