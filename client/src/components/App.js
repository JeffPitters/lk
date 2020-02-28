'use strict';

import React from 'react';
import {observer, inject} from 'mobx-react';
import StartPage from './StartPage.js';
import LoginDialog from './LoginDialog.js';
import ClientCard from './ClientCard.js';
import Chat from './Chat.js';
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

@inject{'appStore'}
@observer
export default class App extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const appStore = this.props.appStore;

        //если сессионный ключ еще действует и токен вставлен, проверяем тот ли это токен и логиним автоматом
        //иначе показываем стартовую страницу с инструкцией
        if (false) {
            return (
                <ClientCard />
            );
        } else {
            return (
                <StartPage />
            );
        }


    }
}