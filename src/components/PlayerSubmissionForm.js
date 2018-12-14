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

    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;

    this.setState(newState);
  };

  onFormSubmit = (event) => {
    event.preventDefault();

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

    let inputValues = Object.values(this.state);

    const hasInput = () => {
      inputValues.forEach((value) => {
        if (value === '') {
          return 'input-form-background'
        } else {
          return 'boop'
        };
        console.log(value);
      });
    };

    const classFirstAdj = this.state.firstAdjective ? '' : 'input-form-background';
    const classFirstNoun = this.state.firstNoun ? '' : 'input-form-background';
    const classAdverb = this.state.adverb ? '' : 'input-form-background';
    const classVerb = this.state.verb ? '' : 'input-form-background';
    const classSecondAdj = this.state.secondAdjective ? '' : 'input-form-background';
    const classSecondNoun = this.state.secondNoun ? '' : 'input-form-background';


    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.playerNumber }</h3>

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
              className={classFirstAdj}
              />
            <input
              name="firstNoun"
              value={this.state.firstNoun}
              onChange={this.onInputChange}
              placeholder="noun"
              type="text"
              className={classFirstNoun}
              />
            <input
              name="adverb"
              value={this.state.adverb}
              onChange={this.onInputChange}
              placeholder="adverb"
              type="text"
              className={classAdverb}
              />
            <input
              name="verb"
              value={this.state.verb}
              onChange={this.onInputChange}
              placeholder="verb"
              type="text"
              className={classVerb}
              />
            the
            <input
              name="secondAdjective"
              value={this.state.secondAdjective}
              onChange={this.onInputChange}
              placeholder="adjective"
              type="text"
              className={classSecondAdj}
              />
            <input
              name="secondNoun"
              value={this.state.secondNoun}
              onChange={this.onInputChange}
              placeholder="noun"
              type="text"
              className={classSecondNoun}
              />
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
