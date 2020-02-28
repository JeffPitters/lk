'use strict';

import {action, observable} from 'mobx';

export default class buttonStore {
    @observable params {
        value: "",
        disabled: null
    }

    @action clickHandle = () => {

    };
}
