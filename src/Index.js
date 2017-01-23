// src/Index.js
/*eslint no-console:0 */

import ReactDOM from "react-dom";

import routes from "./Routes";

// Render the main component into the dom
ReactDOM.render(routes, document.getElementById("app"));



/*
import React from "react";
import Router from "react-router";
import ReactDOM from "react-dom";
import createBrowserHistory from "history/lib/createBrowserHistory";
import routes from "./Routes";

let history = createBrowserHistory();

ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById("app"));
*/
