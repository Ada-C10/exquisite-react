import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstAdjective: "",
      firstNoun: "",
      firstAdverb: "",
      firstVerb: "",
      secondAdjective: "",
      secondNoun: ""
    }
  }

  onInputChange = (event) => {
    console.log("In on input change");

    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;
    // newState.field = value;  // not the same :(
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newSubmission = {
      firstAdjective: this.state.firstAdjective,
      firstNoun: this.state.firstNoun,
      firstAdverb: this.state.firstAdverb,
      firstVerb: this.state.firstVerb,
      secondAdjective: this.state.secondAdjective,
      secondNoun: this.state.secondNoun
    };

    this.setState({
      firstAdjective: "",
      firstNoun: "",
      firstAdverb: "",
      firstVerb: "",
      secondAdjective: "",
      secondNoun: ""
    });

    // Now we need to do something with the student...
    console.log("Created a new student:", newSubmission);
    this.props.addStudentCallback(newSubmission);

    this.setState({errorMessages: []});
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

            {
              // Put your form inputs here... We've put in one below as an example
            }
            <input
              placeholder="adjective"
              type="text"
              name="firstAdjective"
              value={this.state.firstAdjective}
              onChange={this.onInputChange} />

            <input
              placeholder="noun"
              type="text"
              name="firstNoun"
              value={this.state.firstNoun}
              onChange={this.onInputChange} />

            <input
              placeholder="adverb"
              type="text"
              name="firstAdverb"
              value={this.state.firstAdverb}
              onChange={this.onInputChange} />

            <input
              placeholder="verb"
              type="text"
              name="firstVerb"
              value={this.state.firstVerb}
              onChange={this.onInputChange} />
            the
            <input
              placeholder="adjective"
              type="text"
              name="secondAdjective"
              value={this.state.secondAdjective}
              onChange={this.onInputChange} />

            <input
              placeholder="noun"
              type="text"
              name="secondNoun"
              value={this.state.secondNoun}
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
