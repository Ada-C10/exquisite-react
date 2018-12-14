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
      noun2: '',
      player: 1,
    };
  }

  onInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newState = {}
    newState[field] = value;
    this.setState(newState);
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    const updatedPlayer = this.state.player + 1;

    const playerSubmission = {
      adj1: this.state.adj1,
      noun1: this.state.noun1,
      adv: this.state.adv,
      verb: `${this.state.verb} the`,
      adj2: this.state.adj2,
      noun2: `${this.state.noun2}.`
    };

    this.setState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
      player: updatedPlayer
    });

    console.log("created a new submission")
    this.props.addSubmissionCallback(playerSubmission);
  };

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player {this.state.player}</h3>

        <form onSubmit={this.onFormSubmit} className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            The
            <input
              placeholder="adjective"
              type="text"
              name="adj1"
              value={this.state.adj1}
              onChange={this.onInputChange} />
            <input
              type="text"
              placeholder="noun"
              name="noun1"
              value={this.state.noun1}
              onChange={this.onInputChange}  />
            <input
              type="text"
              placeholder="adverb"
              name="adv"
              value={this.state.adv}
              onChange={this.onInputChange}  />
            <input
              type="text"
              placeholder="verb"
              name="verb"
              value={this.state.verb}
              onChange={this.onInputChange} />
            the
            <input
              type="text"
              placeholder="adjective"
              name="adj2"
              value={this.state.adj2}
              onChange={this.onInputChange}  />
            <input
              type="text"
              placeholder="noun"
              name="noun2"
              value={this.state.noun2}
              onChange={this.onInputChange}  />
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
