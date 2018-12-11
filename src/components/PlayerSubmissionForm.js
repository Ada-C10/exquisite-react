import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

// TODO:
// - DRY up code with deconstruction/spread/etc? all those grammar parts...

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

    // this.setState({
    //   adjective1: event.target.value,
    //   noun1: event.target.value,
    //   adverb1: event.target.value,
    //   verb1: event.target.value,
    //   adjective2: event.target.value,
    //   noun2: event.target.value,
    // })
  }

  // onSubmit = (event) => {
  //   event.preventDefault();
  //
  //   this.props.updateCB(this.state, this.props.index)
  // }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">
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
