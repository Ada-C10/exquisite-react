import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      submissions: [],
      mountFinalPoem: false,
      recentSubmission: "",
      firstSubmission: false
    }
  }

  addSubmission = (newSubmission) => {
  const submissions = this.state.submissions;
  let submission = <p>The {newSubmission.adj1} {newSubmission.noun1} {newSubmission.adverb} {newSubmission.verb} the {newSubmission.adj2} {newSubmission.noun2}.</p>
  submissions.push(submission);
  this.setState({submissions: submissions});
  this.setState({recentSubmission: submission});
  this.setState({firstSubmission: true});
  }

  mountFinalPoem = (event) => {
    this.setState({mountFinalPoem: true});
  }

  render() {
    const submissions = this.state.submissions
    const mountFinalPoem = this.state.mountFinalPoem
    const recentSubmission = [submissions - 1]

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

        <RecentSubmission recentSubmission={this.state.recentSubmission} render={mountFinalPoem} firstSubmission={this.state.firstSubmission}/>

        <PlayerSubmissionForm addSubmissionCallback={this.addSubmission} player={submissions.length} render={mountFinalPoem}/>

        <FinalPoem submissions={this.state.submissions} render={mountFinalPoem} mountFinalPoemCallback={this.mountFinalPoem}/>

      </div>
    );
  }
}
//how come this.mountFinalPoem doesnt need .state but for submissions, without .state it was undefined?

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
