import React from 'react';
import './main.css';
import { createRoot } from 'react-dom/client';
import '../src/i18n/i18n';
import { AppStore, setupStore } from './redux/Store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

const Store: AppStore = setupStore();
const container = document.getElementById('app-root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={Store}>
                <Home />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
