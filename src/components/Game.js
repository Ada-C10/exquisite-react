import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recentSubmission: undefined,
      submissionsList: [],
      shouldShowPlayerSubmissionForm: true,
    };
  }

//multiple things in one state
//copy over eveything from state
//change the state of the copy
//save the state by calling setState and assign the copied version
addSubmission = (newSubmission) => {
    const poemArray = this.state.submissionsList;
    poemArray.push(newSubmission);

  console.log("state after recent submit", this.state.newSubmission);

    this.setState({
      recentSubmission: newSubmission,
      submissionsList: poemArray,
    });
  }

  endIt = () => {
    this.setState({
      shouldShowPlayerSubmissionForm: false,
    });
  }

  render() {

    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    console.log("poem array", this.state.submissionsList);


    return (

      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        { this.state.recentSubmission ? <RecentSubmission submission={this.state.recentSubmission} /> : "" }


        <PlayerSubmissionForm addSubmissionCallback={this.addSubmission} endGame={this.state.shouldShowPlayerSubmissionForm}/>

        <FinalPoem poem={this.state.submissionsList}  />

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
