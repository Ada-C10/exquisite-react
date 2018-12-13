import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      poem: [],
      poemVisible: false,
    }
  }

  addPoemLine = (newSubmission) => {
    const amendedPoem = [...this.state.poem];
    amendedPoem.push(newSubmission);
    console.log('In addPoemLine function in Game. Submission:', newSubmission);
    console.log(amendedPoem);
    this.setState({poem: amendedPoem
    });
  }

  showFullPoem = () => {
    const poemVisibility = !this.state.poemVisible;
    this.setState({poemVisible: poemVisibility});
  }

  render() {

    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    const displayPoem = this.state.poemVisible?
      <FinalPoem poem={this.state.poem}
          />
       :
      <PlayerSubmissionForm addSubmissionCallback={this.addPoemLine} playerNumber={this.state.poem.length + 1} />
        ;

      const displayButton = this.state.poemVisible == false ?
        <div className="FinalPoem__reveal-btn-container">
          <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={this.showFullPoem}/>
        </div>
        :
        " ";

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        <RecentSubmission />


        <div>
          {displayPoem}
          {displayButton}
        </div>
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
