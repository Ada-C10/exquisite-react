import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cadaver: [],
      recentSubmission: "",
      finalSubmit: false,
    }
  }

  addPartToCadaver = (cadaverPart) => {
    const cadaver = this.state.cadaver;
    cadaver.push(cadaverPart);

    this.setState({
      cadaver: cadaver,
      recentSubmission: cadaverPart,
    });
  }

  displayCadaver = () => {
    const cadaverParts = this.state.cadaver
    const cadaver = cadaverParts.map((line) => {
      return <p>{line}</p>
    })
    this.setState({
      cadaver: [],
      recentSubmission: "",
      finalSubmit: true,
    })
    return cadaver
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

        { this.state.recentSubmission !== "" ? <RecentSubmission mostRecent={this.state.recentSubmission}/> : null }

        { this.state.finalSubmit === true ? null : <PlayerSubmissionForm formFields={FIELDS} submissionFormCallback={this.addPartToCadaver} /> }

        <FinalPoem finalPoemCallback={this.displayCadaver} finalSumbit={this.state.finalSubmit}/>

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
