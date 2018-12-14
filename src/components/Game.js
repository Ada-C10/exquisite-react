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
      showPoem: false,
      showPoemRevealButton: false
    };
  };

  formatLine = (line) => {
    let {adjective1, noun1, adverb1, verb1, adjective2, noun2} = line;

    return `The ${adjective1} ${noun1} ${adverb1} ${verb1} the ${adjective2} ${noun2} .`
  };

  addPoemLine = (poemLine) => {
    const poemLines = this.state.poemLines;
    poemLines.push(this.formatLine(poemLine));

    this.setState({poemLines: poemLines});
    this.setState({showPoemRevealButton: true});
  };

  findRecentLine = (poemLine) => {
    return poemLine
  };

  revealPoemHandler = () => {
    this.setState({showPoem: true});
  };

  render() {

    let showPoem = this.state.showPoem;
    let showPoemRevealButton = this.state.showPoemRevealButton
    let poemLines = this.state.poemLines;
    let numLines = (poemLines.length);
    let userNum = numLines+1;

    // const exampleFormat = FIELDS.map((field) => {
    //   if (field.key) {
    //     return field.placeholder;
    //   } else {
    //     return field;
    //   }
    // }).join(" ");

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">The adjective noun adverb verb the adjective noun .</p>


        {!showPoem && showPoemRevealButton ? <RecentSubmission poemDraft={this.state.poemLines} /> : ''}

        {!showPoem ? <PlayerSubmissionForm addPoemLineCB={this.addPoemLine}
        userNum={userNum}/> : ''}

        <FinalPoem poemDraft={this.state.poemLines} showPoem={showPoem}
          revealPoemCB={this.revealPoemHandler}
          showPoemRevealButton={showPoemRevealButton} />

      </div>
    );
  }
}

// const FIELDS = [
//   "The",
//   {
//     key: 'adj1',
//     placeholder: 'adjective',
//   },
//   {
//     key: 'noun1',
//     placeholder: 'noun',
//   },
//   {
//     key: 'adv',
//     placeholder: 'adverb',
//   },
//   {
//     key: 'verb',
//     placeholder: 'verb',
//   },
//   "the",
//   {
//     key: 'adj2',
//     placeholder: 'adjective',
//   },
//   {
//     key: 'noun2',
//     placeholder: 'noun',
//   },
//   ".",
// ];

export default Game;
