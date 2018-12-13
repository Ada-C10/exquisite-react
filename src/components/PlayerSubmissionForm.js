import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adj1: '',
      noun1: '',
      adv1: '',
      verb1: '',
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
    console.log(event.target.className);
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    console.log("Player Submission Message - Submitting player submission");

    const stateValues = [...Object.values(this.state)]
    console.log(`State Value array = ${stateValues}`);
    // slice create array of Object.values, slice, concat with the
    const sub1 = stateValues.slice(0, 5);
    const sub2 = stateValues.slice(5);
    console.log(sub1);
    console.log(sub2);
    const submission = "The" + sub1 + "the" + sub2
    // submission = submission.concat["the"].concat(stateValues.slice(5)).join(' ');
    // const submission = ["The"].concat(...Object.values(this.state)).join(' ').concat('.');

    console.log(`Submission is: ${submission}`);

    this.setState({
      adj1: '',
      noun1: '',
      adv1: '',
      verb1: '',
      adj2: '',
      noun2: '',
    });

    this.props.onPlayerSubmit(submission)
  }


  render() {
    const newState = [...Object.keys(this.state)]

    const placeholderValue = ['adjective', 'noun', 'adverb', 'verb', 'adjective', 'noun']

    const formRender = newState.map((item, i) => {
      return <input type="text" value={this.state[item]} onChange={this.onInputChange} placeholder={placeholderValue[i]}
               className={this.state[item] === '' ? "PlayerSubmissionForm__input--invalid" : "PlayerSubmissionForm__poem-inputs"} key={i}
                />;
    } );

    let submissionForm;
    if (!this.props.isSubmitted) {
      submissionForm = <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.playerNumber}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onFormSubmit}>


          <div className="PlayerSubmissionForm__poem-inputs">
            The
            {formRender.slice(0, 4)}
            the
            {formRender.slice(4)}
            .
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    }

    return (
      <div className="PlayerSubmissionForm">
        {submissionForm}
      </div>
    );
  }
}

export default PlayerSubmissionForm;
