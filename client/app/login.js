'use strict';

import React, {Component} from "react";
import {observable} from "mobx";
import {observer} from "mobx-react";
import styled from "styled-components"


class Input extends Component {
	render () {
		return (
			<input className={this.props.className} />
		)
	}
}

const ModalInput = styled(Input)`
  width:200px;
  padding:8px;
  margin-bottom: 5px;
  border:2px solid #ddd;
  border-radius: 10px;
  color:#888;
  outline:0;
  font-size:14px;
  width: 100%;
  display: flex;
  align-self: center;
  font-weight:bold
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
  	background:cornflowerblue;
  }
  font-size: 14px;
  text-align: center !important;
  background: #428bca;
  border: #357ebd solid 0px;
  border-radius: 5px;
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
			  Введите ИНН и выберите ЭЦП
			</div>
		)
	}
}

const ModalHeader = styled(Header)`
    padding: 10px 20px;
`

class Dialog extends Component {
	render() {
		return (
			<div className={this.props.className}>
			  <ModalHeader />
			  <ModalInput/>
			  <ModalInput/>
			  <ModalButton text="Войти" />
			</div>
		)
	}
}

const ModalDialog = styled(Dialog)`
  display: flex;
  flex-flow: column;
  background: #fefefe;
  border: #333333 solid 0px;
  border-radius: 5px;
  text-align:center;
  position: fixed;
  flex-basis: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 5%;
  padding-right: 5%;
  box-shadow:0 5px 10px rgba(0,0,0,0.3);
`

class ModalOverlay extends Component {
	render() {
		return (
		  <div className={this.props.className}>
           <ModalDialog />
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