import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjectiveOne: '',
      nounOne: '',
      adverb: '',
      verb: '',
      adjectiveTwo: '',
      nounTwo: '',
      submissionCount: 0,
    };
  }

  onAdjOneChange = (event) => {
    console.log(`Adjective1 Field updated ${event.target.value}`);
    this.setState({
      adjectiveOne: event.target.value,
    });
  }

  onNounOneChange = (event) => {
    console.log(`Noun1 Field updated ${event.target.value}`);
    this.setState({
      nounOne: event.target.value,
    });
  }

  onAdverbChange = (event) => {
    console.log(`Adverb Field updated ${event.target.value}`);
    this.setState({
      adverb: event.target.value,
    });
  }

  onVerbChange = (event) => {
    console.log(`Verb Field updated ${event.target.value}`);
    this.setState({
      verb: event.target.value,
    });
  }

  onAdjTwoChange = (event) => {
    console.log(`Adjective2 Field updated ${event.target.value}`);
    this.setState({
      adjectiveTwo: event.target.value,
    });
  }

  onNounTwoChange = (event) => {
    console.log(`Noun2 Field updated ${event.target.value}`);
    this.setState({
      nounTwo: event.target.value,
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newSubmission = `The ${this.state.adjectiveOne} ${this.state.nounOne} ${this.state.adverb} ${this.state.verb} the ${this.state.adjectiveTwo} ${this.state.nounTwo}`;
    const newCount = this.state.submissionCount + 1;

    this.setState({
      adjectiveOne: '',
      nounOne: '',
      adverb: '',
      verb: '',
      adjectiveTwo: '',
      nounTwo: '',
      submissionCount: newCount,
    });

    this.props.addSubmissionCallback(newSubmission)
    this.props.endGameCallback()
  }

  render() {

    return (
        <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.state.submissionCount + 1}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onFormSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">

            <div>
              <label htmlFor="adjectiveOne">Enter in an adjective:</label>
              <input placeholder="tall" name="adjectiveOne"
                value={this.state.adjectiveOne}
                onChange={this.onAdjOneChange} />
            </div>
            <div>
              <label htmlFor="nounOne">Place in a noun:</label>
              <input placeholder="heart" name="nounOne"
                value={this.state.nounOne}
                onChange={this.onNounOneChange} />
            </div>
            <div>
              <label htmlFor="adverb">Choose an adverb:</label>
              <input placeholder="gently" name="adverb"
                value={this.state.adverb}
                onChange={this.onAdverbChange} />
            </div>
            <div>
              <label htmlFor="verb">Choose a verb:</label>
              <input placeholder="bathed"name="verb"
                value={this.state.verb}
                onChange={this.onVerbChange} />
            </div>
            <div>
              <label htmlFor="name">Choose another adjective:</label>
              <input placeholder="scary" name="adjectiveTwo"
                value={this.state.adjectiveTwo}
                onChange={this.onAdjTwoChange} />
            </div>
            <div>
              <label htmlFor="nounTwo">Choose another noun:</label>
              <input placeholder="home"
                name="nounTwo"
                value={this.state.nounTwo}
                onChange={this.onNounTwoChange} />
            </div>
            <div className="PlayerSubmissionForm__submit">
              <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
