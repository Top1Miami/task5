import React from 'react';
import './messageBoxHeader.css';

class MessageBoxHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerCheckBox: false
    };
    this.handler = this.handler.bind(this);
  }

  handler(link) {
    const selected = link.target.checked;
    this.props.headerCheckBox(selected);
    this.setState({headerCheckBox: selected});
  }

  render() {
    return (
      <div className="message-box__element">
        <input type="checkbox" className="checkbox" id="useless0"  checked={this.state.headerCheckBox} onChange = {this.handler}/>
        <button className="message-buttons" type = "button">Переслать</button>
        <button className="message-buttons" type = "button" onClick={this.props.deleteLetter}>Удалить</button>
        <button className="message-buttons" type = "button">Это спам!</button>
        <button className="message-buttons" type = "button">Прочитано</button>
      </div>
    );
  }

}

export default MessageBoxHeader;
