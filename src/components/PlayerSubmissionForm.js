import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adj1: "",
      noun1: "",
      adv: "",
      verb: "",
      adj2: "",
      noun2: "",
      submissionCount: 0
    };
  }

  // createForm(){
  //   const fields = this.state.formList.formFields
  //   // console.log(fields)
  //   const formFields = fields.map((field, i) => {
  //     if (field.key) {
  //       return <input type="text" placeholder={field.placeholder}  onChange={this.onInputChange}/>
  //     } else {
  //       return field;
  //     }
  //   });
  //   return formFields
  // }

  // onInputChange = (event) => {
  //   const updatedState = {};
  //
  //   const field = event.target;
  //   const value = event.target.value;
  //   console.log(value, "oninput change")
  //   updatedState[field] = value;
  //   this.setState(updatedState);
  // }

  onAdj1Change = (event) => {
    this.setState({
      adj1: event.target.value,
    });
  }

  onAdj2Change = (event) => {
    this.setState({
      adj2: event.target.value,
    });
  }

  onNoun1Change = (event) => {
    this.setState({
      noun1: event.target.value,
    });
  }

  onNoun2Change = (event) => {
    this.setState({
      noun2: event.target.value,
    });
  }

  onAdverbChange = (event) => {
    this.setState({
      adv: event.target.value,
    });
  }

  onVerbChange = (event) => {
    this.setState({
      verb: event.target.value,
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    if (this.state.adj1 === '' || this.state.adj2 === '' || this.state.noun1 === '' || this.state.noun2 === '' || this.state.adv === '' || this.state.verb === '') {
    } else {
      const newLine = {
        adj1: this.state.adj1,
        noun1: this.state.noun1,
        adv: this.state.adv,
        verb: this.state.verb,
        adj2: this.state.adj2,
        noun2: this.state.noun2
      };

      const constructedLine = `The ${newLine.adj1} ${newLine.noun1} ${newLine.adv} ${newLine.verb} the ${newLine.adj2} ${newLine.noun2}.`;

      const increasedCount = this.state.submissionCount + 1;

      this.setState({
        adj1: "",
        noun1: "",
        adv: "",
        verb: "",
        adj2: "",
        noun2: "",
        submissionCount: increasedCount
      });
      event.target.reset();

      this.props.submissionFormCallback(constructedLine)
    }
  }


  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.state.submissionCount + 1 }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit= {this.onFormSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">
            The
            <input name="adj1" type="text" placeholder={"adjective"} onChange= {this.onAdj1Change} />
            <input name="noun1" type="text" placeholder={"noun"} onChange= {this.onNoun1Change} />
            <input name="adverb" type="text" placeholder={"adverb"} onChange= {this.onAdverbChange} />
            <input name="verb" type="text" placeholder={"verb"} onChange= {this.onVerbChange} />
            the
            <input name="adj2" type="text" placeholder={"adjective"}  onChange= {this.onAdj2Change}/>
            <input name="noun2" type="text" placeholder={"noun"} onChange= {this.onNoun2Change} />
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
