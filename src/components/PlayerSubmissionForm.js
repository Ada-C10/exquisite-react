import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      noun1: "",
      adjective1: "",
      adverb: "",
      verb: "",
      adjective2: "",
      noun2: "",

    }
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

    const newSentence = {
      noun: this.state.noun1,
      adjective: this.state.adjective1,
      adverb: this.state.adverb,
      verb: this.state.verb,
      Adjective: this.state.adjective2,
      Noun: this.state.noun2,

    };

    this.setState({
      noun1: "",
      adjective1: "",
      adverb: "",
      verb: "",
      adjective2: "",
      noun2: "",
    });

    console.log("Created a new sentence", newSentence);
    this.props.addSentenceCallback(newSentence)

  }



  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form"
          onSubmit={this.onFormSubmit}
          >
          <div className="PlayerSubmissionForm__poem-inputs">
            The
            <div>
              <input
                name="adjective1"
                placeholder="adjective"
                type="text"
                value={this.state.adjective1}
                onChange={this.onInputChange}
                />

            </div>
            <div>
              <input
                name="noun1"
                placeholder="noun"
                type="text"
                value={this.state.noun1}
                onChange={this.onInputChange}
                />
            </div>
            <div>
              <input
                name="adverb"
                placeholder="adverb"
                type="text"
                value={this.state.adverb}
                onChange={this.onInputChange}
                />
            </div>
            <div>
              <input
                name="verb"
                placeholder="verb"
                type="text"
                value={this.state.verb}
                onChange={this.onInputChange}
                />
            </div>
            <div>
              the,
              <input
                name="adjective2"
                placeholder="adjective"
                type="text"
                value={this.state.adjective2}
                onChange={this.onInputChange}
                />
            </div>

            <div>
              <input
                name="noun2"
                placeholder="noun"
                type="text"
                value={this.state.noun2}
                onChange={this.onInputChange}
                />
            </div>

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
