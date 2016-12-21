// src/Index.js
/*eslint no-console:0 */

import 'core-js/fn/object/assign';
import ReactDOM from 'react-dom';

import routes from './Routes';

// Render the main component into the dom
ReactDOM.render(routes, document.getElementById('app'));