import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjective: "",
      noun: '',
      adverb: '',
      verb: '',
      adverb2: '',
      noun2: ''
    }
  }

  onInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newState = {};
    newState[field] = value;

    this.setState(newState);
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    console.log('poemLine');

    const poemLine = 'The ' + this.state.adjective + ' ' + this.state.noun + ' ' + this.state.adverb + ' ' + this.state.verb + ' the ' + this.state.adverb2 + ' ' + this.state.noun2 + '.';

    this.props.addLine(poemLine);
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.submissionNumber }</h3>

        <form className="PlayerSubmissionForm__form"
          onSubmit = {this.onFormSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">

            <label>The</label>
            <input
              name="adjective"
              placeholder="adjective"
              value = {this.state.adjective}
              onChange = {this.onInputChange}
              type="text" />
            <input
              name="noun"
              placeholder="noun"
              value = {this.state.noun}
              onChange = {this.onInputChange}
              type="text" />
            <input
              name="adverb"
              placeholder="adverb"
              value = {this.state.adverb}
              onChange = {this.onInputChange}
              type="text" />
            <input
              name="verb"
              placeholder="verb"
              value = {this.state.verb}
              onChange = {this.onInputChange}
              type="text" />
            <label>the</label>
              <input
                name="adverb2"
                placeholder="adverb"
                value = {this.state.adverb2}
                onChange = {this.onInputChange}
                type="text" />
              <input
                name="noun2"
                placeholder="noun"
                value = {this.state.noun2}
                onChange = {this.onInputChange}
                type="text" />
            <label>.</label>

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
