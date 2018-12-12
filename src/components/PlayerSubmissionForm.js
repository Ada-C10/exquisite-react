import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      adj1: "",
      noun1: "",
      adverb: "",
      verb: "",
      adj2: "",
      noun2: ""
    }
  }

  // inputValid = (input) => {
  //   return this.state.input.match(/[a-zA-Z]+/g);
  // }

  onInputChange = (event) => {
    event.target.className = ' '
    const field = event.target.name;
    const value = event.target.value;
    const newState = {}
    newState[field] = value;
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const newLine = {
      adj1: this.state.adj1,
      noun1: this.state.noun1,
      adverb: this.state.adverb,
      verb: this.state.verb,
      adj2: this.state.adj2,
      noun2: this.state.noun2
    };

    this.setState({
      adj1: "",
      noun1: "",
      adverb: "",
      verb: "",
      adj2: "",
      noun2: ""
    });

    // Now we need to do something with the student...
    console.log("Created a new submission:", newLine);
    this.props.addSubmissionCallback(newLine);
  }


  render() {

    if (this.props.render) {
      // console.log(props.submissions)
      return <div></div>
    }

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.player + 1}</h3>

        <form
          className="PlayerSubmissionForm__form"
          onSubmit={this.onFormSubmit}>
          <div className="PlayerSubmissionForm__poem-inputs">
            <div>
              <label htmlFor="adj1">The </label>
              <input
                placeholder="adjective"
                name="adj1"
                value={this.state.adj1}
                onChange={this.onInputChange}
                className="PlayerSubmissionFormt__input--invalid"/>
            </div>
            <div>
              <input
                placeholder="noun"
                name="noun1"
                value={this.state.noun1}
                onChange={this.onInputChange}
                className="PlayerSubmissionFormt__input--invalid"/>
            </div>
            <div>
              <input
                placeholder="adverb"
                name="adverb"
                value={this.state.adverb}
                onChange={this.onInputChange}
                className="PlayerSubmissionFormt__input--invalid"/>
            </div>
            <div>
              <input
                placeholder="verb"
                name="verb"
                value={this.state.verb}
                onChange={this.onInputChange}
                className="PlayerSubmissionFormt__input--invalid"/>
            </div>
            <div>
              <label htmlFor="adj2">the </label>
              <input
                placeholder="adjective"
                name="adj2"
                value={this.state.adj2}
                onChange={this.onInputChange}
                className="PlayerSubmissionFormt__input--invalid"/>
            </div>
            <div>
              <input
                placeholder="noun"
                name="noun2"
                value={this.state.noun2}
                onChange={this.onInputChange}
                className="PlayerSubmissionFormt__input--invalid"/>
            </div>
            <p>.</p>
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
// className={this.inputValid(adv) ? "valid": "invalid"} />
