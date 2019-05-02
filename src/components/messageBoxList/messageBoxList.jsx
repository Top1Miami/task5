import React, { Component } from 'react';
import './messageBoxList.css';
import Letter from '../letter';

class MessageBoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kittenText: ' ',
      opened: false
    };
    this.openLetter = this.openLetter.bind(this);
  }

  openLetter(letter) {
    this.setState({
      opened: true,
      kittenText: letter
    });
  }

  render() {
    return (
      <div className="message-box__list-wrap">
        {this.state.opened ?
          (<div className="special-kitten">
            <div className="kitten-page">
              <div className="close-page" role="button" onClick = {() => { this.setState({opened: false})}}>X</div>
              <div className="manul-text">{this.state.kittenText}</div>
            </div>
          </div>)
          :
          (<ul className="message-box__list">
            {this.props.listOfLetters.map(data => (
              <Letter
                key = {data.id}
                checkBox = {this.props.checkBox}
                openLetter = {this.openLetter}
                data = {data}
              />
              ))}
          </ul>)
        }
      </div>
    );
  }
}

export default MessageBoxList;
