import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      art1: 'The',
      adj1: '',
      noun1: '',
      adv1: '',
      verb1: '',
      art2: 'The',
      adj2: '',
      noun2: '',
    }
  }

  onInputChange = (event) => {
    console.log(`Input has changed`);
    const field = event.target.name;
    const value = event.target.value;
    const newState = {}
    newState[field] = value;
    event.target.className = "PlayerSubmissionForm__poem-inputs";
    console.log(event.target.className);
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    console.log("Player Submission Message - Submitting player submission");

    const submission = [].concat(...Object.values(this.state)).join(' ').concat('.');

    console.log(`Submission is: ${submission}`);

    this.setState ({
      adj1: '',
      noun1: '',
      adv1: '',
      verb1: '',
      adj2: '',
      noun2: '',
    })

    this.props.onPlayerSubmit(submission)
  }



  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.playerNumber}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onFormSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">
            The
            <input type="text" name="adj1" value={this.state.adj1} onChange={this.onInputChange} placeholder="adjective"
                     className="PlayerSubmissionForm__input--invalid"
                      />
            <input type="text" name="noun1" value={this.state.noun1} onChange={this.onInputChange} placeholder="noun" className="PlayerSubmissionForm__input--invalid" />
            <input type="text" name="adv1" value={this.state.adv1} onChange={this.onInputChange} placeholder="adverb" className="PlayerSubmissionForm__input--invalid" />
            <input type="text" name="verb1" value={this.state.verb1} onChange={this.onInputChange} placeholder="verb" className="PlayerSubmissionForm__input--invalid" />
            the
            <input type="text" name="adj2" value={this.state.adj2} onChange={this.onInputChange} placeholder="adjective" className="PlayerSubmissionForm__input--invalid" />
            <input type="text" name="noun2" value={this.state.noun2} onChange={this.onInputChange} placeholder="noun" className="PlayerSubmissionForm__input--invalid" />
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
