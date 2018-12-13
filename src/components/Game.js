import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sentence: [],
      count: 1,
      poem: [],
      finalPoemBool: true,
      playerSubBool: true,
      recentSubBool: true,
    }

  }

  poem = () => {
    let tempArray = []
    const lyrics = this.state.sentence

    lyrics.forEach(function(sentence) {
      const element = (sentence.adjective1 + " " +  sentence.noun1  + " " + sentence.adverb + " " + sentence.verb  + " " + sentence.adjective2 + " " + sentence.noun2)
      tempArray.push(element)
    });


    this.setState({'poem': tempArray, 'finalPoemBool': false, 'playerSubBool': false, 'recentSubBool': false })

    return console.log(lyrics);
  }


  addSentence = (newSentence) => {
    const sentence = this.state.sentence;
    sentence.push(newSentence);
    const count = this.state.count + 1
    this.setState({'sentence': sentence, 'count': count})
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

        <RecentSubmission sentences={this.state.sentence} recentSubBool={this.state.recentSubBool}/>

        <PlayerSubmissionForm addSentenceCallback={this.addSentence} count={this.state.count} playerSubBool={this.state.playerSubBool} />

        <FinalPoem poem={this.poem} finalpoem={this.state.poem} finalPoemBool={this.state.finalPoemBool}/>

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
