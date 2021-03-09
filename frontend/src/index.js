import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";
import "antd/dist/antd.css";

import App from "./App";
import { userActions } from "./redux/actions";

if (store.getState().user.isAuth) {
    store.dispatch(userActions.fetchUserData());
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
