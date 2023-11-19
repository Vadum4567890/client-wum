import React from 'react';
import {createRoot } from 'react-dom/client';
import App from './components/App/App';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './features/store';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import uaTranslation from './locales/ua.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ua: { translation: uaTranslation },
  },
  lng: 'ua', // Default language
  interpolation: {
    escapeValue: false,
  },
});



createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);