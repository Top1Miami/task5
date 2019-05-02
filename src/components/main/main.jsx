import React from 'react';
import LeftMenu from '../leftMenu';
import MessageBox from '../messageBox';
import './main.css';

class Main extends React.Component {
  render() {
    return (
      <div className="main-window">
        <LeftMenu
          newMail={this.props.newMail}
        />
        <MessageBox
          listOfLetters={this.props.listOfLetters}
          deleteLetter={this.props.deleteLetter}
          headerCheckBox={this.props.headerCheckBox}
          checkBox={this.props.checkBox}
        />
      </div>
    );
  }
}

export default Main;
