'use strict';

import React from 'react';
import {inject, observer} from 'mobx-react';

@inject{startPageStore}
@observer
export default class StartPage extends React.Component {
    constructor(props) {
        super(props);
    };

    render(){
        const text = this.props.text

        <div>
            {text}
        </div>
    }
}
