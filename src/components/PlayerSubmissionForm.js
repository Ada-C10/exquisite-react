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
      noun2: ''
    };
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

    const newLine = this.props.fields.map((field) => {
      if (field.key) {
        return this.state[field.key];
      } else {
        return field;
      }
    }).join(" ");

    this.setState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: ''
    });

    this.props.addLineCallback(newLine);
  }

  inputValid = (field) => {
    const newState = {...this.state};
    return newState[field] === '' ? "PlayerSubmissionFormt__input--invalid" : "";
  }

  getFields() {
    const exampleFormat = this.props.fields.map((field) => {
      if (field.key) {
        return <input
          placeholder={field.placeholder}
          name={field.key}
          type="text"
          value={this.state[field.key]}
          onChange={this.onInputChange}
          className={this.inputValid(field.key)}/>

      } else {
        return field;
      }
    });
    return exampleFormat;
  }

  render() {
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.playerCount + 1}</h3>

        <form
          className="PlayerSubmissionForm__form"
          onSubmit={this.onFormSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
              // The adjective noun adverb verb the adjective noun
              this.getFields()
            }

            {
            //   <input
            //   placeholder="Adjective"
            //   name='adjective1'
            //   type="text"
            //   value={this.state.adjective1}
            //   onChange={this.onInputChange}
            //   className={this.inputValid('adjective1')}/>
            // <input
            //   placeholder="Noun"
            //   name='noun1'
            //   type="text"
            //   value={this.state.noun1}
            //   onChange={this.onInputChange}
            //   className={this.inputValid('noun1')}/>
            // <input
            //   placeholder="Adverb"
            //   name='adverb1'
            //   type="text"
            //   value={this.state.adverb1}
            //   onChange={this.onInputChange}
            //   className={this.inputValid('adverb1')}/>
            // <input
            //   placeholder="Verb"
            //   name='verb1'
            //   type="text"
            //   value={this.state.verb1}
            //   onChange={this.onInputChange}
            //   className={this.inputValid('verb1')}/>
            // the
            // <input
            //   placeholder="Adjective"
            //   name='adjective2'
            //   type="text"
            //   value={this.state.adjective2}
            //   onChange={this.onInputChange}
            //   className={this.inputValid('adjective2')}/>
            // <input
            //   placeholder="Noun"
            //   name='noun2'
            //   type="text"
            //   value={this.state.noun2}
            //   onChange={this.onInputChange}
            //   className={this.inputValid('noun2')}/>
            // .
          }

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
