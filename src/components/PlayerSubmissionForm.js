import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = { 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', }
  }

  onInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newState = {}
    newState[field] = value;
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const stateValues = [...Object.values(this.state)]
    const sub1 = stateValues.slice(0, 4);
    const sub2 = stateValues.slice(4);
    const submission = ["The"].concat(sub1,["the"],sub2).join(' ')

    this.setState({ 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', });

    this.props.onPlayerSubmit(submission)
  }

  render() {
    const newState = [...Object.keys(this.state)]
    const placeholderValue = ['adjective', 'noun', 'adverb', 'verb', 'adjective', 'noun']
    const formRender = newState.map((item, i) => {
      return <input type="text" key={i} name={item} value={this.state[item]} onChange={this.onInputChange} placeholder={placeholderValue[i]}
               className={this.state[item] === '' ? "PlayerSubmissionForm__input--invalid" : "PlayerSubmissionForm__poem-inputs"} />;
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
