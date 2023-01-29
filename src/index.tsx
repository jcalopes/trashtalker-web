import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Home';
import '../src/i18n/i18n';
import { AppStore, setupStore } from './redux/Store';
import { Provider } from 'react-redux';

const Store: AppStore = setupStore();
const container = document.getElementById('app-root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={Store}>
            <Home/>
        </Provider>
    </React.StrictMode>
);