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

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form"
          onSubmit={this.onFormSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">

            The
            <input
              placeholder="adjective"
              type="text"
              name="firstAdjective"
              value={this.state.firstAdjective}
              onChange={this.onInputChange}/>
            <input
              placeholder="noun"
              type="text"
              name="firstNoun"
              value={this.state.firstNoun}
              onChange={this.onInputChange} />
            <input
              placeholder="adverb"
              type="text"
              name="adverb"
              value={this.state.adverb}
              onChange={this.onInputChange} />
            <input
              placeholder="verb"
              type="text"
              name="verb"
              value={this.state.verb}
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
              onChange={this.onInputChange} /> .
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
