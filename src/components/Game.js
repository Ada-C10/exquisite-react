import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

// TODO:
// - unique key?
// DRY code
// HTML?? <p></p>
// idea - only show poemDraft when user submits that button to see the whole thing


class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      poemLines: []
      // poemLines: undefined
    };
  }

  addPoemLine = (poemLine) => {
    // QUESTION: move to finalpoem?
    const poemLines = this.state.poemLines;
    poemLines.push(poemLine);

    this.setState({poemLines: poemLines});
  }


  render() {

    let poemLines = this.state.poemLines;
    let numLines = (poemLines.length)
    let userNum = numLines+1


    let poemDraft = poemLines.map((poemLine, i) => {
      return <FinalPoem
        key = {i}
        index = {i}
        adjective1 = {poemLine.adjective1}
        noun1 = {poemLine.noun1}
        adverb1 = {poemLine.adverb1}
        verb1 = {poemLine.verb1}
        adjective2 = {poemLine.adjective2}
        noun2 = {poemLine.noun2}
        />
    });

    console.log(poemDraft[0])



    let findRecentLine = poemLines.map((poemLine, i) => {
      if (i+1 === numLines ) {
        return <RecentSubmission
          key = {i}
          index = {i}
          adjective1 = {poemLine.adjective1}
          noun1 = {poemLine.noun1}
          adverb1 = {poemLine.adverb1}
          verb1 = {poemLine.verb1}
          adjective2 = {poemLine.adjective2}
          noun2 = {poemLine.noun2}
          />}
        });

        console.log(findRecentLine)









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

          <p class="Game__format-example">The adjective noun adverb verb the adjective noun .</p>


            {findRecentLine}

            <PlayerSubmissionForm addPoemLineCB={this.addPoemLine}
              userNum={userNum}/>

            {poemDraft}

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
