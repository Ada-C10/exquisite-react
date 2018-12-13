import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      poemLines: [],
      poemFinalized: false
    }
  }

  addSubmission = (newSubmission) => {
    console.log("A new submission was made!")
    const poemLines = [...this.state.poemLines];
    // destructuring technique
    const { adjective, noun, adverb, verb, adjective2, noun2 } = newSubmission;
    const newSentence = `The ${adjective} ${noun} ${adverb} ${verb} the ${adjective2} ${noun2}`;
    poemLines.push(newSentence);
    this.setState({ poemLines: poemLines })
  }

  handlePoemFinalized = () => {
    if (this.state.poemLines.length > 0) {
      this.setState({ poemFinalized: true });
    }
  }

  render() {
    const lastEntry = this.state.poemLines[this.state.poemLines.length - 1]
    console.log(lastEntry)

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
        { /* Will only execute if the first statement is true, guts of an if statement, just have the comparision. Will also work with || Once it fails if will stop for && */ }
        {lastEntry && !this.state.poemFinalized && (
          <RecentSubmission addSubmission={lastEntry} />
        )}

        {!this.state.poemFinalized && (
          <PlayerSubmissionForm
            addSubmissionCallback={this.addSubmission}
          />
        )}

        <FinalPoem
          poemLines={this.state.poemLines}
          poemFinalized={this.state.poemFinalized}
          onPoemFinalized={this.handlePoemFinalized}
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
