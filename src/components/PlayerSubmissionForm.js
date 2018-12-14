import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    // set initial state for the props
    this.state = {
      adjective: "",
      noun: "",
      adverb: "",
      verb: "",
      adverb2: "",
      noun2: "",
      playerNumber: 1,
    }
  }

  onInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newState = {};
    // set the new state
    newState[field] = value;
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    // validation check to make sure the word passed in is not an empty string
    console.log("poemLine");

    const nextPlayer = this.state.playerNumber +1;
    this.setState({playerNumber: nextPlayer});

    const line = {
      adj1: this.state.adjective,
      noun1: this.state.noun,
      adverb: this.state.adverb,
      verb: this.state.verb,
      adj2: this.state.adverb2,
      noun2: this.state.noun2,
    }

    const {adjective, noun, adverb, verb, adverb2, noun2} = line;

    const sentence = `The ${adjective} ${noun} ${adverb} ${verb} the ${adverb2} ${noun2}.`

    this.setState({
      adj1: "",
      noun1: "",
      adverb: "",
      verb: "",
      adj2: "",
      noun2: "",
    })

    // console.log(sentence);
    this.props.setCurrentLine(sentence);
  }


  render() {
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form
          className="PlayerSubmissionForm__form"
          onSubmit={this.onFormSubmit}
          >

          <div className="PlayerSubmissionForm__poem-inputs">

            <h4>The</h4>

            <input
              placeholder="adjective"
              adjective="adjective"
              type="text"
              value={this.state.adjective}
              onChange={this.onInputChange}
              />

            <input
              placeholder="noun"
              adjective="noun"
              type="text"
              value={this.state.noun}
              onChange={this.onInputChange}
              />

            <input
              placeholder="adverb"
              adjective="adverb"
              type="text"
              value={this.state.adverb}
              onChange={this.onInputChange}
              />

            <input
              placeholder="verb"
              adjective="verb"
              type="text"
              value={this.state.verb}
              onChange={this.onInputChange}
              />

            <h4>the</h4>

            <input
              placeholder="adverb2"
              adjective="adverb2"
              type="text"
              value={this.state.adverb2}
              onChange={this.onInputChange}
              />

            <input
              placeholder="noun"
              adjective="noun"
              type="text"
              value={this.state.noun}
              onChange={this.onInputChange}
              />
            <h4>.</h4>
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}


export default PlayerSubmissionForm;
