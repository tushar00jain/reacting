import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App';
import Bootstrap from "../vendor/bootstrap-without-jquery";
import Favourites from "../pages/Favourites";
import Layout from "../components/Layout";
import Login from "../pages/Login";
import Settings from "../pages/Settings";
// import Signup from "../pages/Signup";

export default (store) => {

  // const requireAuth = (nextState, replace, callback) => {
  //   const { user: { authenticated }} = store.getState();
  //   if (!authenticated) {
  //     replace({
  //       pathname: '/todo/login',
  //       state: { nextPathname: nextState.location.pathname }
  //     });
  //   }
  //   callback();
  // };
  //
  // const redirectAuth = (nextState, replace, callback) => {
  //   const { user: { authenticated }} = store.getState();
  //   if (authenticated) {
  //     replace({
  //       pathname: '/todo'
  //     });
  //   }
  //   callback();
  // };

  return (
		<Route path="/" component={Layout}>
			<IndexRoute component={App}></IndexRoute>
			<Route path="favourites" component={Favourites}></Route>
			<Route path="settings" component={Settings}></Route>
			<Route path="login" component={Login}></Route>
			{/*<App />*/}
		</Route>
  );
};
