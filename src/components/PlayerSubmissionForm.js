import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playerNum: 0,
      adj1: "",
      noun1: "",
      adverb: "",
      verb: "",
      adj2: "",
      noun2: ""
    };
  }

  onInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newState = {}
    newState[field] = value;

    this.setState(newState);
  }

  onFormSubmit = (event) =>{
      event.preventDefault();

      const row = {
        adj1: this.state.adj1,
        noun1: this.state.noun1,
        adverb: this.state.adverb,
        verb: this.state.verb,
        adj2: this.state.adj2,
        noun2: this.state.noun2,
      };

      this.setState({
        adj1: "",
        noun1: "",
        adverb: "",
        verb: "",
        adj2: "",
        noun2: "",
        playerNum: this.state.playerNum + 1,
      });

      this.props.addSubmitRowCallback(row);
    }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.state.playerNum}</h3>


        <form className="PlayerSubmissionForm__form" onSubmit={this.onFormSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">
            The
            <input
              name="adj1"
              placeholder="adj"
              type="text"
              value={this.state.adj1}
              onChange={this.onInputChange} />
            <input
              name="noun1"
              placeholder="noun"
              type="text"
              value={this.state.noun1}
              onChange={this.onInputChange}  />
            <input
              name="adverb"
              placeholder="adverb"
              type="text"
              value={this.state.adverb}
              onChange={this.onInputChange}  />
            <input
              name="verb"
              placeholder="verb"
              type="text"
              value={this.state.verb}
              onChange={this.onInputChange}  />
              the
            <input
              name="adj2"
              placeholder="adj"
              type="text"
              value={this.state.adj2}
              onChange={this.onInputChange}  />
            <input
              name="noun2"
              placeholder="noun"
              type="text"
              value={this.state.noun2}
              onChange={this.onInputChange}  />
            .
          </div>

          <div className="PlayerSubmissionForm__submit" >
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
