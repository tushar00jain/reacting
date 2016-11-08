// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import { RouterContext, match, createMemoryHistory } from 'react-router'
// import { Provider } from 'react-redux';
// import createRoutes from './routes.js';
// import configureStore from '../redux/store';
// import { fetchComponentDataBeforeRender } from '../api/fetchComponentDataBeforeRender';
//
// function renderFullPage(renderedContent, initialState, head= {
//   title: 'React Todo List',
//   meta: '<meta charset="UTF-8" />',
//   link: '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/paper/bootstrap.css" rel="stylesheet">'
// }) {
//   return `
//   <!doctype html>
//     <html lang="">
//     <head>
//         ${head.title}
//         ${head.meta}
//         ${head.link}
//         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
//         <link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css">
//     </head>
//     <body>
//     <div id="app">${renderedContent}</div>
//     <script>
//       window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
//     </script>
//     <script type="text/javascript" charset="utf-8" src="/assets/bundle.js"></script>
//     </body>
//     </html>
//   `;
// }
//
// export default function render(req, res) {
//     const history = createMemoryHistory();
//     const authenticated = req.isAuthenticated();
//     const store = configureStore({
//       user: {
//         authenticated,
//         isWaiting: false,
//         message: '',
//         isLogin: true
//       }
//     }, history);
//
//     const routes = createRoutes(store);
//
//   match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
//     if (error) {
//       res.status(500).send(error.message);
//     } else if (redirectLocation) {
//       res.redirect(302, redirectLocation.pathname + redirectLocation.search);
//     } else if (renderProps) {
//       const InitialView = (
//         <Provider store={store}>
//             <RouterContext {...renderProps} />
//         </Provider>
//       );
//
//       fetchComponentDataBeforeRender(store.dispatch, renderProps.components, renderProps.params)
//       .then(() => {
//         const componentHTML = renderToString(InitialView);
//         const initialState = store.getState();
//         res.status(200).end(renderFullPage(componentHTML, initialState));
//       })
//       .catch(() => {
//         res.end(renderFullPage('', {}));
//       });
//     } else {
//       res.status(404).send('Not Found');
//     }
//   });
// }
