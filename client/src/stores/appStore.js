'use strict';

import startPageStore from './startPageStore.js';
import loginDialogStore from './loginDialogStore.js';
import clientCardStore from './clientCardStore.js';
import chatStore from './chatStore.js';

export default class appStore {
    constructor() {
        this.startPageStore = new startPageStore();
        //this.loginDialogStore = new loginDialogStore();
        this.clientCardStore = new clientCardStore();
        //this.chatStore = new chatStore();
    };

}