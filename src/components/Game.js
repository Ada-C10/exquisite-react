import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lines: [],
      poemReady: false,
    };
  };

  addLine = (newLine) => {
    const lines = this.state.lines;
    const line = {...newLine}
    const fullLine = `The ${line.firstAdjective} ${line.firstNoun} ${line.adverb} ${line.verb} the ${line.secondAdjective} ${line.secondNoun}.`

    lines.push(fullLine);
    this.setState({lines: lines});

  };

  changePoemStatus = () => {
    const poemStatus = !(this.state.poemReady);
    this.setState({poemReady: poemStatus});
  };

  render() {

    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    const lastSubmission = this.state.lines[this.state.lines.length - 1]

    const displayRecentSubmission = this.state.lines.length > 0 && !this.state.poemReady ? <RecentSubmission lastSubmission={lastSubmission}/> : '' ;

    const displayFinalPoem =
      this.state.poemReady ?
        <FinalPoem
          changePoemStatus={this.changePoemStatus}
          lines={this.state.lines}
          poemStatus={this.state.poemReady}/
          > : <PlayerSubmissionForm addPoemCallback={this.addLine} playerNumber={this.state.lines.length + 1}/> ;

    const displaySubmitPoemButton = !this.state.poemReady ?
    <div className="FinalPoem__reveal-btn-container">
      <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={this.changePoemStatus} />
    </div> : '';

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        {displayRecentSubmission}

        {displayFinalPoem}

        {displaySubmitPoemButton}

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
