import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstAdjective: '',
      firstNoun: '',
      adverb: '',
      verb: '',
      secondAdjective: '',
      secondNoun: '',
    }
  }

  onInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newPoemLine = {
      firstAdjective: this.state.firstAdjective,
      firstNoun: this.state.firstNoun,
      adverb: this.state.adverb,
      verb: this.state.verb,
      secondAdjective: this.state.secondAdjective,
      secondNoun: this.state.secondNoun,
    };

    this.setState({
      firstAdjective: '',
      firstNoun: '',
      adverb: '',
      verb: '',
      secondAdjective: '',
      secondNoun: '',
    });

    this.props.addNewPoemLineCallback(newPoemLine);
  }

  validInput = (field) => {
    return field.match(/\S+/);
  }

  render() {
    const invalidClass = "PlayerSubmissionFormt__input--invalid";

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.playerNumber}</h3>

        <form className="PlayerSubmissionForm__form"
          onSubmit={this.onFormSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">

            The
            <input
              placeholder="adjective"
              type="text"
              name="firstAdjective"
              value={this.state.firstAdjective}
              onChange={this.onInputChange}
              className={this.validInput(this.state.firstAdjective) ? "" : invalidClass}/>
            <input
              placeholder="noun"
              type="text"
              name="firstNoun"
              value={this.state.firstNoun}
              onChange={this.onInputChange}
              className={this.validInput(this.state.firstNoun) ? "" : invalidClass} />
            <input
              placeholder="adverb"
              type="text"
              name="adverb"
              value={this.state.adverb}
              onChange={this.onInputChange}
              className={this.validInput(this.state.adverb) ? "" : invalidClass} />
            <input
              placeholder="verb"
              type="text"
              name="verb"
              value={this.state.verb}
              onChange={this.onInputChange}
              className={this.validInput(this.state.verb) ? "" : invalidClass} />
            the
            <input
              placeholder="adjective"
              type="text"
              name="secondAdjective"
              value={this.state.secondAdjective}
              onChange={this.onInputChange}
              className={this.validInput(this.state.secondAdjective) ? "" : invalidClass} />
            <input
              placeholder="noun"
              type="text"
              name="secondNoun"
              value={this.state.secondNoun}
              onChange={this.onInputChange}
              className={this.validInput(this.state.secondNoun) ? "" : invalidClass} /> .
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
