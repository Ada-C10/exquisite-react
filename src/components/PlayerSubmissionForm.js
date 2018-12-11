import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjective1: '',
      noun1: '',
      adverb1: '',
      verb1: '',
      adjective2: '',
      noun2: ''
    };
  }

  onInputChange = (event) => {
    // console.log("In on input change");
    // console.log(event.target.name);
    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;
    // console.log(newState);
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newLine = `The ${this.state.adjective1} ${this.state.noun1} ${this.state.adverb1} ${this.state.verb1} the ${this.state.adjective2} ${this.state.noun2}`;

    this.setState({
      adjective1: '',
      noun1: '',
      adverb1: '',
      verb1: '',
      adjective2: '',
      noun2: ''
    });

    this.props.addLineCallback(newLine);
    console.log(this.state);
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.playerCount + 1}</h3>

        <form
          className="PlayerSubmissionForm__form"
          onSubmit={this.onFormSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
              // The adjective noun adverb verb the adjective noun
            }
            The
            <input
              placeholder="Adjective"
              name='adjective1'
              type="text"
              value={this.state.adjective1}
              onChange={this.onInputChange}/>
            <input
              placeholder="Noun"
              name='noun1'
              type="text"
              value={this.state.noun1}
              onChange={this.onInputChange}/>
            <input
              placeholder="Adverb"
              name='adverb1'
              type="text"
              value={this.state.adverb1}
              onChange={this.onInputChange}/>
            <input
              placeholder="Verb"
              name='verb1'
              type="text"
              value={this.state.verb1}
              onChange={this.onInputChange}/>
            the
            <input
              placeholder="Adjective"
              name='adjective2'
              type="text"
              value={this.state.adjective2}
              onChange={this.onInputChange}/>
            <input
              placeholder="Noun"
              name='noun2'
              type="text"
              value={this.state.noun2}
              onChange={this.onInputChange}/>
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
