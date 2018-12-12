import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);


  }

  onInputChange = (event) => {
    console.log('On Input Change');
    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            The
            <input
              placeholder="adjective"
              type="text"
              name="firstAdjective"
              onChange={this.onInputChange}/>
            <input
              placeholder="noun"
              type="text"
              name="firstNoun"
              onChange={this.onInputChange} />
            <input
              placeholder="adverb"
              type="text"
              name="adverb"
              onChange={this.onInputChange} />
            <input
              placeholder="verb"
              type="text"
              name="verb"
              onChange={this.onInputChange} />
            the
            <input
              placeholder="adjective"
              type="text"
              name="secondAdjective"
              onChange={this.onInputChange} />
            <input
              placeholder="noun"
              type="text"
              name="secondNoun"
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
