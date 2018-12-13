import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjective1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
      player: 1
    };
  }
  onFieldChangeHandler = (event, fieldToGetValueFrom = "value") => {
    const updateState ={};

    const fieldName = event.target.name;
    const value = event.target.value;

    updateState[fieldName] = value;

    this.setState(updateState);
  }

  HandlePlayerSubmit = (event)=> {
    event.preventDefault();
    let player = this.state.player
    console.log(event)
    this.props.onPlayerSubmit(this.state);
    this.setState({
      adj1: "",
      adj2: "",
      adv: "",
      noun1: "",
      noun2: "",
      verb: "",
      player: player+=1,
    });
  };

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.state.player}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit = {this.HandlePlayerSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">
            <p>The</p>
            <input
              placeholder="adjective"
              type="text"
              name="adj1"
              value= {this.state.adj1}
              onChange={this.onFieldChangeHandler} />

            <input
              placeholder="noun"
              type="text"
              name="noun1"
              value={this.state.noun1}
              onChange={this.onFieldChangeHandler} />

            <input
              placeholder="adverb"
              type="text"
              name="adv"
              value={this.state.adv}
              onChange={this.onFieldChangeHandler} />

            <input
              placeholder="verb"
              type="text"
              name="verb"
              value={this.state.verb}
              onChange={this.onFieldChangeHandler} />
            <p> the</p>
            <input
              placeholder="adjective"
              type="text"
              name="adj2"
              value={this.state.adj2}
              onChange={this.onFieldChangeHandler} />

            <input
              placeholder="noun"
              type="text"
              name="noun2"
              value={this.state.noun2}
              onChange={this.onFieldChangeHandler} />

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input
              type="submit"
              value="Submit Line"
              className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

PlayerSubmissionForm.propTypes = {
  onPlayerSubmit: PropTypes.func.isRequired
}

export default PlayerSubmissionForm;
