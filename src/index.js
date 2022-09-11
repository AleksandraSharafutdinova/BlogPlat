import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux";
import App from "./components/app/app";
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
