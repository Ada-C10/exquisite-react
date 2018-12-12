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
      formDisplayed: false,
      recentSubmission: ""
    }
  }

  addSubmission = (newSubmission) => {
  const submissions = this.state.submissions;
  let submission = <p>The {newSubmission.adj1} {newSubmission.noun1} {newSubmission.adverb} {newSubmission.verb} the {newSubmission.adj2} {newSubmission.noun2}.</p>
  submissions.push(submission);
  this.setState({submissions: submissions});
  this.setState({recentSubmission: submission})
  // this.setState({recent: newSubmission});
  // console.log("iiii", newSubmission)
  }

  finalPoemRender = (event) => {
    this.setState({formDisplayed: true});
    console.log('woo', this.state.submissions[0])
  }

  render() {
    const submissions = this.state.submissions
    const formDisplayed = this.state.formDisplayed
    const recentSubmission = [submissions - 1]

    // const finalPoem = submissions.map((submission, i) => {
    //   return <FinalPoem
    //     key={i}
    //     adj1={submission.adj1}
    //     noun1={submission.noun1}
    //     adverb={submission.adverb}
    //     verb={submission.verb}
    //     adj2={submission.adj2}
    //     noun2={submission.noun} />
    // });

    // const mostRecentSubmission = this.state.submissions[-1]

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

        <RecentSubmission recentSubmission={this.state.recentSubmission} render={formDisplayed}/>

        <PlayerSubmissionForm addSubmissionCallback={this.addSubmission} player={submissions.length} render={formDisplayed}/>

        <FinalPoem submissions={this.state.submissions} render={formDisplayed} finalPoemCallback={this.finalPoemRender}/>

      </div>
    );
  }
}
//how come this.finalPoemRender doesnt need .state but for submissions, without .state it was undefined?

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

//piece of state in game that is t/f, and is passed into finalpoem. once true, final poem gets displayed. and each submision is being passed into finalpoem as its being submitted.
