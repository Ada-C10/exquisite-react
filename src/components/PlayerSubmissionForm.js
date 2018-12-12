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
      nound: ''
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

            {
              // Put your form inputs here... We've put in one below as an example
            }
            <input
              placeholder="hm..."
              type="text" />

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
