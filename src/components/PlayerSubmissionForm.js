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

    console.log("hello world");

    this.setState({
      adjectiveOne: '',
      nounOne: '',
      adverb: '',
      verb: '',
      adjectiveTwo: '',
      nounTwo: '',
    });

    this.props.addSubmisionCallback(newSubmission)

  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            <div>
              <label htmlFor="adjectiveOne">The </label>
              <input placeholder="tall" name="adjectiveOne"
                value={this.adjectiveOne}
                onChange={this.onAdjOneChange} />
            </div>
            <div>
              <label htmlFor="nounOne"> </label>
              <input placeholder="heart" name="nounOne"
                value={this.nounOne}
                onChange={this.onNounOneChange} />
            </div>
            <div>
              <label htmlFor="adverb">is </label>
              <input placeholder="gently" name="adverb"
                value={this.adverb}
                onChange={this.onAdverbChange} />
            </div>
            <div>
              <label htmlFor="verb">Verb:</label>
              <input placeholder="bathed"name="verb"
                value={this.verb}
                onChange={this.onVerbChange} />
            </div>
            <div>
              <label htmlFor="name">in a</label>
              <input placeholder="scary" name="adjectiveTwo"
                value={this.adjectiveTwo}
                onChange={this.onAdjTwoChange} />
            </div>
            <div>
              <label htmlFor="nounTwo"></label>
              <input placeholder="home"
                name="nounTwo"
                value={this.nounTwo}
                onChange={this.onNounTwoChange} />
            </div>
            <div className="PlayerSubmissionForm__submit">
              <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" onSubmit={this.onFormSubmit}/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
