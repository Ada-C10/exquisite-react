import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      adjective1: "",
      noun1: "",
      adverb: "",
      verb: "",
      adjective2: "",
      noun2: "",
    }
  }

  onInputChange = (event) => {
    console.log("Hit the onInputChange funtion");

    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;
    // newState.field = value;  // not the same :(
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newLine = {
      adjective1: this.state.adjective1,
      noun1: this.state.noun1,
      adverb: this.state.adverb,
      verb: this.state.verb,
      adjective2: this.state.adjective2,
      noun2: this.state.noun2,
    };
    this.setState({
      adjective1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
    });
    console.log("create a line from input:", newLine);
    // this.props.addLineToRecentCallback(newLine);
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form"onSubmit={this.onFormSubmit} >

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
            }
            <input
              placeholder="adjective"
              type="text"
              name="adjective1"
              value={this.state.adjective1}
              onChange={this.onInputChange}
              />
            <input
              placeholder="noun"
              type="text"
              name="noun1"
              value={this.state.noun1}
              onChange={this.onInputChange}
              />
            <input
              placeholder="adverb"
              type="text"
              name="adverb"
              value={this.state.adverb}
              onChange={this.onInputChange}
              />
            <input
              placeholder="verb"
              type="text"
              name="verb"
              value={this.state.verb}
              onChange={this.onInputChange}
              />
            <input
              placeholder="adjective"
              type="text"
              name="adjective2"
              value={this.state.adjective2}
              onChange={this.onInputChange}
              />
            <input
              placeholder="noun"
              type="text"
              name="noun2"
              value={this.state.noun2}
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
