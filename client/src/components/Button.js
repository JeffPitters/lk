'use strict';

import React from 'react';
import styled from "styled-components";
import {observer, inject} from 'mobx-react';

@inject('buttonStore')
@observer
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: props.text};

    }

    render() {
        return (
            <button className={this.props.className}>
                {this.state.text}
            </button>
    )
    }
}

//размеры, текст и все ситуативное принимаем пропсами
//цвета и оформление выставляем по текущей теме
export default const StyledButton = styled(Button)`
  &:hover {
  	background-color:#04c;
  	transition: background-position .1s linear;
  }
  font-size: 14px;
  font-family: "Verdana";
  text-align: center !important;
  text-decoration: none;
  background-image: linear-gradient(to bottom,#08c,#04c);
  border: 1px solid #ccc;
  border-radius: 4px;
  border-color: rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);
  text-shadow: 0 -1px 0 rgba(0,0,0,.25);
  cursor: pointer;
  color: #fff;
  width: 50%;
  display: flex;
  align-self: center;
  justify-content: center;
  height: 30px;
`
