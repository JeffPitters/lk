'use strict';

import React, {Component} from "react";
import {observable} from "mobx";
import {observer} from "mobx-react";
import styled from "styled-components"

class Tab extends Component {
    render() {
        return (
            <div>
             {this.props.children}
            </div>
        )
    }
}

class Input extends Component {
	render () {
		return (
			<input className={this.props.className} placeholder={this.props.text}/>
		)
	}
}

const ModalInput = styled(Input)`
  &::placeholder {
    color: rgba(136, 136, 136, 0.9);
  }

  width: ${props => props.width};
  padding:8px;
  margin-bottom: 5px;
  border:2px solid #ddd;
  border-radius: 10px;
  color:#888;
  outline:0;
  font-size:14px;
  display: flex;
  align-self: center;
  font-weight: bold
`

class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {text: props.text};
		//this.state = {action: props.actionCallback}
	}

	render() {
		return (
			<button className={this.props.className}>
			   {this.state.text}
			</button>
		)
	}
}

const ModalButton = styled(Button)`
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

class Header extends Component {
	render() {
		return (
			<div className={this.props.className}>
            {this.props.children}
			</div>
		)
	}
}

const ModalHeader = styled(Header)`
    padding: 10px 20px;
    font-family: "Verdana";
    font-size: 16px;
`

class Dialog extends Component {
	render() {
		return (
			<div className={this.props.className}>
              <ModalHeader />
              <ModalInput width="100%" text="ИНН" />
              <ModalInput width="100%" text="Пароль" />
              <ModalButton text="Войти" />
			</div>
		)
	}
}



const ModalDialog = styled(Dialog)`
  display: flex;
  flex-flow: column;
  background: rgba(254, 254, 254, 0.9);
  border: #333333 solid 0px;
  border-radius: 5px;
  text-align:center;
  position: fixed;
  flex-basis: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 3%;
  padding-right: 3%;
  box-shadow:0 5px 10px rgba(0,0,0,0.3);
`

class ModalOverlay extends Component {
	render() {
		return (
		  <div className={this.props.className}>
           <ModalDialog w="500px" h="200px"/>
		  </div>
		)
	}
}

const StyledOverlay = styled(ModalOverlay)`
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
`

export default StyledOverlay