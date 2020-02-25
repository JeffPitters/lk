'use strict';

import React, {Component} from "react";
import Modal from './login.js';
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

//class Store {
// @observable modal = {
// 	show: false,
// 	body: null
// }
//
// @action showModal(body) {
// 	this.modal.show = true;
// 	this.modal.body = body;
// }

// @action modalSubmit() {
// 	this.modal.button.actionCallback();
//  this.modal.show = false;
//  this.modal.body = null;
// }
//}

class App extends Component {
    render() {
        return (
            <Modal />
        )
    }
}

export default App;