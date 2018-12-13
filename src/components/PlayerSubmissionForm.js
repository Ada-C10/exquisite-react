import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

// TODO:
// - DRY up code with deconstruction/spread/etc? all those grammar parts... (state, submission)
// - validation?

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjective1: '',
      noun1: '',
      adverb1: '',
      verb1: '',
      adjective2: '',
      noun2: '',
      // this.props.poemList.noun2
      // index: props.index
    };
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState)
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const submittedPoemLine = {
      adjective1: this.state.adjective1,
      noun1: this.state.noun1,
      adverb1: this.state.adverb1,
      verb1: this.state.verb1,
      adjective2: this.state.adjective2,
      noun2: this.state.noun2,
      finishedPoem: false,
    };

    this.setState({
      adjective1: '',
      noun1: '',
      adverb1: '',
      verb1: '',
      adjective2: '',
      noun2: '',
    });

    this.props.addPoemLineCB(submittedPoemLine);
  }



render() {

  let userNum = this.props.userNum

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ userNum }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={this.onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">
          The
          <input name="adjective1" placeholder="adjective" type="text"
            value={this.state.adjective1}
            onChange={this.onInputChange}/>
          <input name="noun1" placeholder="noun" type="text"
            value={this.state.noun1}
            onChange={this.onInputChange}/>
          <input name="adverb1" placeholder="adverb" type="text"
            value={this.state.adverb1}
            onChange={this.onInputChange}/>
          <input name="verb1" placeholder="verb" type="text"
            value={this.state.verb1}
            onChange={this.onInputChange}/>
          the
          <input name="adjective2" placeholder="adjective" type="text"
            value={this.state.adjective2}
            onChange={this.onInputChange}/>
          <input name="noun2" placeholder="noun" type="text"
            value={this.state.noun2}
            onChange={this.onInputChange}/>
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
