import React, { Component } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = this.fetchFields();
  }

  fetchFields = () => {
    const fields = this.props.fields.filter((field) => {
      return field.hasOwnProperty("key");
    });

    const startingState = fields.reduce((acc, field) => {
      acc[field.key] = ["", field.placeholder];
      return acc
    }, {});

    return startingState;
  }

  onInputChange = (event) => {

    const field = event.target.name;
    const value = event.target.value;
    const updatedState = this.state;
    updatedState[field][0] = value;
    this.setState(updatedState);
  }

  onLineSubmit = (event) => {
    event.preventDefault();

    this.props.currentLineCallback(`The ${this.state.adj1[0]} ${this.state.noun1[0]} ${this.state.adv[0]} ${this.state.verb[0]} the ${this.state.adj2[0]} ${this.state.noun2[0]}.`);

    this.setState( this.fetchFields() );
  }

  render() {

    const chooseInputClass = (currentState) => {
      return currentState ? "PlayerSubmissionForm__input--invalid" : "";
    };

    const filteredInputs = Object.keys(this.state).map( (key) => {
      const className = chooseInputClass(this.state[key][0]);
      return(
        <input name={key} className={className} placeholder={this.state[key][1]} type="text" value={this.state[key][0]} onChange={this.onInputChange}/>
      )
    });

    return (
      <div className="PlayerSubmissionForm">
        { !this.props.ended &&
          (<h3>Player Submission Form for Player #{ this.props.playerNum }</h3> ) }
          { !this.props.ended &&
            ( <form className="PlayerSubmissionForm__form" onSubmit={this.onLineSubmit}>
            <div className="PlayerSubmissionForm__poem-inputs">
              {filteredInputs}
            </div>
            <div className="PlayerSubmissionForm__submit">
              <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
            </div>
          </form> ) }
        </div>
      );
    }
  }

  export default PlayerSubmissionForm;

  PlayerSubmissionForm.propTypes = {
    currentLineCallback: PropTypes.func.isRequired,
    ended: PropTypes.bool.isRequired,
    fields: PropTypes.array.isRequired,
    playerNum: PropTypes.number.isRequired,
  };
