import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { IntlProvider } from "react-intl";
import { addLocaleData } from "react-intl";
import { MuiThemeProvider } from "@material-ui/core";

import "semantic-ui-css/semantic.min.css";
import App from "./App";
import "./theme/styles/index.scss";
import * as serviceWorker from "./serviceWorker";
import { rootReducer } from "./store/reducers/rootReducer";
import locale_en from "react-intl/locale-data/en";
import locale_ru from "react-intl/locale-data/ru";
import messages_ru from "./translations/ru.json";
import messages_en from "./translations/en.json";
import baseTheme from "./theme/MuiBaseTheme";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);

const theme = baseTheme;

addLocaleData([...locale_en, ...locale_ru]);
const messages = {
  ru: messages_ru,
  en: messages_en
};
const language = navigator.language.split(/[-_]/)[0]; // language without region code

const app = (
  <Provider store={store}>
    <IntlProvider
      locale={language}
      messages={messages[language]}
      defaultLocale="en"
    >
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MuiThemeProvider>
    </IntlProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
