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

    const poemLine = "The " + this.state.adjective + " "  + this.state.noun + " " + this.state.adverb + " " + this.state.verb + " the " + this.state.adverb2 + " " + this.state.noun2 + ".";
    this.props.addLine(poemLine);
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
