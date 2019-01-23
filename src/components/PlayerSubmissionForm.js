import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

// import FinalPoem from './FinalPoem.js';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      format: this.props.format,
      adj1: "",
      noun1: "",
      adv: "",
      verb: "",
      adj2: "",
      noun2: "",
      numberOfPoems: this.props.numberOfPoems,
    }
  }

  onInputChange = (event) => {
    console.log("In on input change");

    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;

    this.setState(newState);
    // console.log(newState);

  }

  submitPoem = (event) => {
    console.log("I am in stopRefresh in PlayerSubmissionForm.js");
    event.preventDefault();

    let newSubmission = {
      the1: this.state.format[0],
      adj1: this.state.adj1,
      noun1: this.state.noun1,
      adv: this.state.adv,
      verb: this.state.verb,
      the2: this.state.format[5],
      adj2: this.state.adj2,
      noun2: this.state.noun2,
      dot: this.state.format[8],
    };

    this.setState({
      adj1: "",
      noun1: "",
      adv: "",
      verb: "",
      adj2: "",
      noun2: "",
    });

    this.props.callback(newSubmission);


  }
  render() {
    // console.log(this.props[0]);
// console.log(`FORM:num of poems: ${this.props.numberOfPoems}`);
    return (

      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.numberOfPoems + 1}</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // this.showInputFormat()
            }

            <span>{this.state.format[0]}</span>
            <input name={this.state.format[1].key}
              placeholder={this.state.format[1].placeholder}
              type="text"
              value={this.state.adj1}
              onChange={this.onInputChange}/>
            <input name={this.state.format[2].key}
              placeholder={this.state.format[2].placeholder}
              type="text"
              value={this.state.noun1}
              onChange={this.onInputChange}/>
            <input
              name={this.state.format[3].key}
              placeholder={this.state.format[3].placeholder}
              type="text"
              value={this.state.adv}
              onChange={this.onInputChange}
              />
            <input name={this.state.format[4].key}
              placeholder={this.state.format[4].placeholder}
              type="text"
              value={this.state.verb}
              onChange={this.onInputChange}/>
            <span>{this.state.format[5]}</span>
            <input name={this.state.format[6].key}
              placeholder={this.state.format[6].placeholder}
              type="text"
              value={this.state.adj2}
              onChange={this.onInputChange}/>
            <input name={this.state.format[7].key}
              placeholder={this.state.format[7].placeholder}
              type="text"
              value={this.state.noun2}
              onChange={this.onInputChange}/>
            <span>{this.state.format[8]}</span>

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" onClick={this.submitPoem}/>
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
