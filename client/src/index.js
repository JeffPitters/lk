'use strict';

import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Provider} from "mobx-react";
import App from "./components/App.js";
import appStore from "./stores/appStore.js";

const stores = {
    appStore,
    startPageStore: appStore.startPageStore,
    //loginDialogStore: appStore.loginDialogStore,
    //clientCardStore: appStore.clientCardStore,
    //chatStore: appStore.chatStore
}

ReactDOM.render((
    <Provider {...stores}>
        <App />
    </Provider>
), document.getElementById('root'));
