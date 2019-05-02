import React from 'react';
import './letter.css';

class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }

  change(link) {
    const id = link.target.id;
    this.props.checkBox(id);
  }


  render() {

    const letterData = this.props.data;
    const animation = (letterData.createLetter ? 'create-letter' : '') + (letterData.deleteLetter ? 'delete-letter' : '');

    return (
      <div
        role="button"
        aria-hidden
        className={`message-box__element ${animation}`}
        onClick={event => {
          if (event.target.className !== 'checkbox') {
            this.props.openLetter(letterData.text);
          }
        }}
        style = {letterData.display ? {} : {display: 'none'}}
      >
        <div className="message-box__element-left-side" >
          <input type="checkbox" className="checkbox" checked = {letterData.selected} id = {letterData.id} onChange={this.change}/>
          <div className="letter-img" >{letterData.name[0]}</div>
          <div className="unread-name">{letterData.name}</div>
        </div>
        <div className="message-box__element-right-side">
          <div className="unread-marker"/>
          <div className="unread">{letterData.phrase}</div>
          <div className="date">{letterData.date + ' ' + letterData.month}</div>
        </div>
      </div>
    );
  }
}

export default Letter;
