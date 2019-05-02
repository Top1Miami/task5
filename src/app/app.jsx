import React, { Component } from 'react';
import Header from '../components/header';
import Main from '../components/main';
import './app.css';
import * as sources from './sources';

const maxInterval = 60 * 10000;
const minInterval = 10;
const interval = 60 * 5000;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfLetters: [],
      timeCrosses: false
    };
    this.newMail = this.newMail.bind(this);
    this.sendingTime = this.sendingTime.bind(this);
    this.deleteLetter = this.deleteLetter.bind(this);
    this.show = this.show.bind(this);
    this.checkBox = this.checkBox.bind(this);
    this.headerCheckBox = this.headerCheckBox.bind(this);
    this.newMail();
  }


  sendingTime() {
    let time = Math.random() * (maxInterval - minInterval) + minInterval;
    if (this.state.timeCrosses) {
      time = Math.random() * (maxInterval - interval) + interval;
      this.setState({ timeCrosses: false });
    } else {
      if (time < interval) {
        this.setState({ timeCrosses: true });
      }
    }
    return time;
  }

  newMail() {
    const timeToSend = this.sendingTime();
    const letter = App.generateLetter();
    this.setState(prevState => {
      const list = prevState.listOfLetters;
      if (list.length >= 30) {
        let movedLetter = list[29];
        movedLetter.display = false;
      }
      letter.createLetter = true;
      list.unshift(letter);
      this.listOfLetters = list;
      return {listOfLetters: list}
    });
    setTimeout(() => {
      this.newMail();
    }, timeToSend);
  }

  checkBox(id) {
    this.setState(prevState => {
      const list = prevState.listOfLetters;
      const i = prevState.listOfLetters.findIndex(x => x.id.toString() === id);
      list[i].selected = !list[i].selected;
      return { listOfLetters: list };
    });
  };

  headerCheckBox(selected) {
    this.setState(prevState => {
      const list = prevState.listOfLetters;
      for (let i = 0; i < Math.min(prevState.listOfLetters.length, 30); i++) {
        list[i].selected = selected;
      }
      return { listOfLetters: list };
    });
  };

  deleteLetter() {
    const list = this.state.listOfLetters;
    for (let i = 0; i < list.length; i++) {
      if (list[i].selected) {
        list[i].deleteLetter = true;
      }
    }
    this.setState({ listOfLetters: this.show(list) });
    this.setState({ listOfLetters: list.filter(letter => !letter.selected) });
  }

  show(list) {
    let displayed = 0;
    for (let i = 0; i < list.length; i++) {
      if (displayed >= 30) {
        break;
      }
      if (!list[i].deleteLetter) {
        displayed++;
        list[i].display = true;
      }
    }
    return list;
  };

  static generateLetter() {
    const id = Math.random() * (maxInterval - minInterval);
    const text = sources.getText();
    const phrase = sources.getPhrase();
    const month = sources.getMonth();
    const name = sources.getName();
    const deleteLetter = false;
    const createLetter = false;
    const selected = false;
    const date = Math.round(Math.random() * 30 + 1);
    const display = true;
    return {
      id,
      date,
      month,
      name,
      phrase,
      text,
      deleteLetter,
      createLetter,
      selected,
      display
    };
  }

  render() {
    return (
      <div>
        <Header/>
        <Main
          newMail={this.newMail}
          listOfLetters={this.state.listOfLetters}
          deleteLetter={this.deleteLetter}
          headerCheckBox = {this.headerCheckBox}
          checkBox = {this.checkBox}
        />
      </div>
    );
  }


}
