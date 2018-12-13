import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentLine: "",
      poem: [],
      hideRecent: true,
    }
  }

  hideRecent = () => {
    console.log("Inside hideRecent");
  }

  currentLineCallback = (sentence) => {
    this.setState({currentLine: sentence}, () => {
      console.log(this.state.currentLine);
    });

    let createPoem = this.state.poem;
    createPoem.push(sentence);
    this.setState({poem: createPoem}, () => {
      console.log(this.state.poem);
    })

  }

  render() {
    let recentSub;
    if(this.state.currentLine.length > 0){
      recentSub = <RecentSubmission currentLine={this.state.currentLine}/>
    };

    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>
        <section className={(!this.state.hideRecent).toString()}>
          {recentSub}

          <PlayerSubmissionForm
            setCurrentLine = {this.currentLineCallback}/>
        </section>

        <FinalPoem
          linesOfPoem={this.state.poem}
          hideRecentCallback = {this.hideRecent}
          />

      </div>
    );
  }
}

const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
