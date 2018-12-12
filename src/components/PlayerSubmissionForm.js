import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjective1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: ''
    }
  }

  onAdjective1Change = (event) => {
    console.log('adjective1 update')
    this.setState({
      adjective1: event.target.value,
    });
  }

  onNoun1Change = (event) => {
    console.log('noun1 update')
    this.setState({
      noun1: event.target.value,
    });
  }

  onAdverbChange = (event) => {
    console.log('adverb update')
    this.setState({
      adverb: event.target.value,
    });
  }

  onVerbChange = (event) => {
    console.log('verb update')
    this.setState({
      verb: event.target.value,
    });
  }

  onAdjective2Change = (event) => {
    console.log('adjective2 update')
    this.setState({
      adjective2: event.target.value,
    });
  }

  onNoun2Change = (event) => {
    console.log('noun2 update')
    this.setState({
      noun2: event.target.value,
    });
  }


  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            <input
              onChange={this.onAdjective1Change}
              value={this.state.adjective1}
              name="adjective1" />

            <input
              onChange={this.onNoun1Change}
              value={this.state.noun1}
              name="noun1" />

            <input
              onChange={this.onAdverbChange}
              value={this.state.adverb}
              name="adverb" />

            <input
              onChange={this.onVerbChange}
              value={this.state.verb}
              name="verb" />

            <input
              onChange={this.onAdjective2Change}
              value={this.state.adjective2}
              name="adjective2" />

            <input
              onChange={this.onNoun2Change}
              value={this.state.noun2}
              name="noun2" />

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
