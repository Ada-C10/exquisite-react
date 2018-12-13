import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjective: "",
      noun: "",
      adverb: "",
      verb: "",
      adjective2: "",
      noun2: "",
      playerNumber: 1
    }
  }

  onInputChange = (event) => {
    console.log("Some stuff was typed in the form!");

    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newSubmission = {
      adjective: this.state.adjective,
      noun: this.state.noun,
      adverb: this.state.adverb,
      verb: this.state.verb,
      adjective2: this.state.adjective2,
      noun2: this.state.noun2
    };

    this.setState({
      adjective: '',
      noun: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
      playerNumber: this.state.playerNumber + 1
    });

    // Now we need to do something with the submission...
    console.log("Created a new submission:", newSubmission);
    this.props.addSubmissionCallback(newSubmission);
  }

  getInputClass = (value) => {
    const className = value.length > 0
      ? ""
      : "PlayerSubmissionFormt__input--invalid";
    return className;
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.state.playerNumber }</h3>

        <form className="PlayerSubmissionForm__form"
              onSubmit={this.onFormSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">
            The
            <input
              className={this.getInputClass(this.state.adjective)}
              name="adjective"
              placeholder="adjective"
              type="text"
              value={this.state.adjective}
              onChange={this.onInputChange} />

            <input
              className={this.getInputClass(this.state.noun)}
              name="noun"
              placeholder="noun"
              type="text"
              value={this.state.noun}
              onChange={this.onInputChange} />

            <input
              className={this.getInputClass(this.state.adverb)}
              name="adverb"
              placeholder="adverb"
              type="text"
              value={this.state.adverb}
              onChange={this.onInputChange} />

            <input
              className={this.getInputClass(this.state.verb)}
              name="verb"
              placeholder="verb"
              type="text"
              value={this.state.verb}
              onChange={this.onInputChange} />

            the

            <input
              className={this.getInputClass(this.state.adjective2)}
              name="adjective2"
              placeholder="adjective"
              type="text"
              value={this.state.adjective2}
              onChange={this.onInputChange} />

            <input
              className={this.getInputClass(this.state.noun2)}
              name="noun2"
              placeholder="noun"
              type="text"
              value={this.state.noun2}
              onChange={this.onInputChange} />
            .
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
