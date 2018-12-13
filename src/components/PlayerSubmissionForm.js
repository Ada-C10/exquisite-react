import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      adjectiveFirst: "",
      nounFirst: "",
      adverb: "",
      verb: "",
      adjectiveSecond: "",
      nounSecond: "",
      playerCount: 1,
      showLatestLine: " ",
    }
  }

  // event handler updates the state
  onInputChange = (event) => {
    console.log("Im input change");

    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    // [field] is a variable
    newState[field] = value;
    this.setState(newState)
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newSubmission =
    this.state.adjectiveFirst +
    this.state.nounFirst +
    this.state.adverb +
    this.state.verb +
    this.state.adjectiveSecond +
    this.state.nounSecond
    ;

    // clearing form
    this.setState({
      adjectiveFirst: "",
      nounFirst: "",
      adverb: "",
      verb: "",
      adjectiveSecond: "",
      nounSecond: "",
      playerCount: 1 + this.state.playerCount,
      showLatestLine: this.state.poemList[0],
    });

    // Now we need to do something with the game...
    this.props.addSubmissionCallback(newSubmission);
  }
  render() {

    if (this.props.showForm) {
      return <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.state.playerCount }</h3>
        <form
          className="PlayerSubmissionForm__form"
          onSubmit={this.onFormSubmit}
          >

          <div className="PlayerSubmissionForm__poem-inputs">

            <label>
              The
              <input
                name="adjectiveFirst"
                value={this.state.adjectiveFirst}
                type="Submit Line"
                placeholder="adjective"
                onChange={this.onInputChange}
                />
              <input
                name="nounFirst"
                value={this.state.nounFirst}
                type="Submit Line"
                placeholder="noun"
                onChange={this.onInputChange}
                />
              <input
                name="adverb"
                value={this.state.adverb}
                type="Submit Line"
                placeholder="adverb"
                onChange={this.onInputChange}
                />
              <input
                name="verb"
                value={this.state.verb}
                type="Submit Line"
                placeholder="verb"
                onChange={this.onInputChange}
                />
              the
              <input
                name="adjectiveSecond"
                value={this.state.adjectiveSecond}
                type="Submit Line"
                placeholder="adjective"
                onChange={this.onInputChange}
                />
              <input
                name="nounSecond"
                value={this.state.nounSecond}
                type="Submit Line"
                placeholder="noun"
                onChange={this.onInputChange}
                />
              .
            </label>
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input
              type="submit"
              value="Submit Lines" className="PlayerSubmissionForm__submit-btn"
              />
          </div>
        </form>
      </div>
    } else {
      return <ul></ul>
    }

  }
}

export default PlayerSubmissionForm;
