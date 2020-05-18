import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentLine: undefined,
      finalPoem: [],
      end: false,
      playerNum: 1
    }
  }

  changeCurrentLine = (line) => {

    let emptyLine = "The"

    for(let i = 0; i < FIELDS.length - 3; i++) {
      emptyLine += " "
    }

    emptyLine += "."

    if (line !== emptyLine) {

      const updatedPoem = this.state.finalPoem
      updatedPoem.push(`${line} `)

        const updatedPlayerNum = this.state.playerNum + 1

      this.setState({
        currentLine: line,
        finalPoem: updatedPoem,
        playerNum: updatedPlayerNum
      })
    }
    else {
      this.setState({
        currentLine: "[PASSED]"
      })
    }
    window.scrollTo(0, 200)
  }

  revealPoem = () => {
    this.setState({
      end: true
    })
  }

  render() {

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

        { this.state.currentLine &&  (<RecentSubmission line={this.state.currentLine} ended={this.state.end}/>) }
        <PlayerSubmissionForm  currentLineCallback={this.changeCurrentLine}
          ended={this.state.end} fields={FIELDS} playerNum={this.state.playerNum}/>
        <FinalPoem poem={this.state.finalPoem} revealPoemCallback={this.revealPoem} ended={this.state.end}/>
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
