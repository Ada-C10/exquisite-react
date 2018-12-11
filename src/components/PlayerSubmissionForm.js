import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstAdjective: '',
      firstNoun: '',
      adverb: '',
      verb: '',
      secondAdjective: '',
      secondNoun: '',
    }
  }

  onInputChange = (event) => {
    console.log('hereeee');

    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;

    this.setState(newState);
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log("created a new poem:");

    const newPoem = {
      firstAdjective: this.state.firstAdjective,
      firstNoun: this.state.firstNoun,
      adverb: this.state.adverb,
      verb: this.state.verb,
      secondAdjective: this.state.secondAdjective,
      secondNoun: this.state.secondNoun,
    };

    this.setState({
      firstAdjective: '',
      firstNoun: '',
      adverb: '',
      verb: '',
      secondAdjective: '',
      secondNoun: '',
    });


    this.props.addPoemCallback(newPoem);
  };



  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form"
          onSubmit={this.onFormSubmit}
          >
          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
            }
            The
            <input
              name="firstAdjective"
              value={this.state.firstAdjective}
              onChange={this.onInputChange}
              placeholder="adjective"
              type="text"
              />
            <input
              name="firstNoun"
              value={this.state.firstNoun}
              onChange={this.onInputChange}
              placeholder="noun"
              type="text" />
            <input
              name="adverb"
              value={this.state.adverb}
              onChange={this.onInputChange}
              placeholder="adverb"
              type="text" />
            <input
              name="verb"
              value={this.state.verb}
              onChange={this.onInputChange}
              placeholder="verb"
              type="text" />
            the
            <input
              name="secondAdjective"
              value={this.state.secondAdjective}
              onChange={this.onInputChange}
              placeholder="adjective"
              type="text" />
            <input
              name="secondNoun"
              value={this.state.secondNoun}
              onChange={this.onInputChange}
              placeholder="noun"
              type="text" />
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
