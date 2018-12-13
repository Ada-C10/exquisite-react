import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      poems: [],
    }
  }

  allPoems = (newPoem) => {
    console.log("I am in allPoems in GAME.JS");
    let allPoems = this.state.poems;

    allPoems.push(newPoem);
    this.setState({
      poems: allPoems,
      poemCount: allPoems.length,
    });
  };

  // showFinalSubinGames = () => {
  //   if ()
  // }

  render() {


    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");
// console.log(`GAME: num of poems: ${this.state.poems.length}`);
    return (

      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        <RecentSubmission recentPoem={this.state.poems[(this.state.poems.length - 1)]}/>

        <PlayerSubmissionForm format={FIELDS} callback={this.allPoems} numberOfPoems={this.state.poems.length}/>

        <FinalPoem finalPoem={this.state.poems}/>

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
