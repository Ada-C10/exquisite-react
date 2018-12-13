import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
      number: 1

    }
  }

  onInputChange = (event) => {
    console.log("input change")

    const field = event.target.name;
    const value = event.target.value;

    const newState = {}
    newState[field] = value;
    this.setState(newState);
  }


  onFormSubmit = (event) => {
    event.preventDefault();

    const newRecentSubmission =

    {line: `The ${this.state.adj1} ${this.state.noun1} ${this.state.adv} ${this.state.verb} the ${this.state.adj2} ${this.state.noun2}.`
    }


    this.setState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
      number: this.state.number + 1
    });

    console.log('created new poem line', newRecentSubmission);
    this.props.addRecentSubmissionCallback(newRecentSubmission);
  }

  createInput = (inputName, placeholder) => {
    return (<input name = {inputName}   placeholder={placeholder}
        type="text"
        className={this.inputValid(inputName) ? 'PlayerSubmissionForm__input' : 'PlayerSubmissionForm__input--invalid'}
        value={this.state[inputName]}
        onChange={this.onInputChange} />)
  }

  inputValid = (input) => {
    return this.state[input].match(/[a-zA-Z]+/);
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.state.number}</h3>

        <form className="PlayerSubmissionForm__form"
          onSubmit={this.onFormSubmit} >

          <div className="PlayerSubmissionForm__poem-inputs">

              The
              {this.createInput('adj1', 'adjective')}
              {this.createInput('noun1', 'noun')}
              {this.createInput('adv', 'adverb')}
              {this.createInput('verb', 'verb')}
              the
              {this.createInput('adj2', 'adjective')}
              {this.createInput('noun2', 'noun')}
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
