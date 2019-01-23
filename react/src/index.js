import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import * as serviceWorker from './serviceWorker';
import './styles.css';

ReactDOM.render(
    (
        <BrowserRouter>
            {renderRoutes(routes)}
        </BrowserRouter>
    )
    , document.getElementById('root')
);
serviceWorker.unregister();
