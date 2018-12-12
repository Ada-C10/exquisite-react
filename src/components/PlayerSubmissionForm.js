import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    const baseState = {};

    props.fields.forEach((field) => {
      if (field.key) {
          baseState[field.key] = '';
      }
    });

    this.state = {...baseState};
    this.baseState = {...baseState};
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

    const poemLine = this.props.fields.map((field) => {

      if (field.key) {
        return this.state[field.key];
      } else {
        return field;
      }
    }).join(" ");

    this.setState(this.baseState);
    this.props.addLine(poemLine);

  }

  render() {

    const inputClass = {}
    for (const field in this.state) {

      inputClass[field] = `PlayerSubmissionFormt__input${this.state[field] === "" ? "--invalid" : ""}`

    }

    const form = this.props.fields.map((field, i) => {
      if (field.key) {

        const key = field.key;
        return (<input
          key = {i}
          className={inputClass[key]}
          name={key}
          placeholder={field.placeholder}
          value = {this.state[key]}
          onChange = {this.onInputChange}
          type="text" />)
      }
      else {
        return (<label key = {i}>{field}</label>)
      }
    });


    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.submissionNumber }</h3>

        <form className="PlayerSubmissionForm__form"
          onSubmit = {this.onFormSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">
            {form}
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
