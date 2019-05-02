import React, { Component } from 'react';
import MessageBoxList from '../messageBoxList'
import MessageBoxSeparator from '../messageBoxSeparator'
import MessageBoxHeader from '../messageBoxHeader'
import MessageBoxFooter from '../messageBoxFooter'
import './messageBox.css';

class MessageBox extends Component {

  render() {
    return (
      <div className= "message-box">
        <MessageBoxHeader
          deleteLetter = {this.props.deleteLetter}
          headerCheckBox = {this.props.headerCheckBox}
        />
        <MessageBoxList
          listOfLetters = {this.props.listOfLetters}
          checkBox = {this.props.checkBox}
        />
        <MessageBoxSeparator />
        <MessageBoxFooter />
      </div>
    );
  }

}

export default MessageBox;
