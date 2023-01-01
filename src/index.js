import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css"
import store from "./Store/ReduxStore";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)