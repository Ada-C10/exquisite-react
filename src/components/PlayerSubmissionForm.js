import React, { Component } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      adj1: "",
      noun1: "",
      adv: "",
      verb: "",
      adj2: "",
      noun2: ""
    }
  }

  onInputChange = (event) => {

    const field = event.target.name;
    const value = event.target.value;

    const updateState = this.state;
    updateState[field] = value;
    this.setState(updateState);
  }

  onLineSubmit = (event) => {
    event.preventDefault();

    this.props.currentLineCallback(`The ${this.state.adj1} ${this.state.noun1} ${this.state.adv} ${this.state.verb} ${this.state.adj2} ${this.state.noun2}.`)

    this.setState({
      adj1: "",
      noun1: "",
      adv: "",
      verb: "",
      adj2: "",
      noun2: ""
    });
  }

  render() {
    return (
      <div className="PlayerSubmissionForm">
        { !this.props.ended &&
          (<h3>Player Submission Form for Player #{  }</h3> ) }
          { !this.props.ended &&
            ( <form className="PlayerSubmissionForm__form" onSubmit={this.onLineSubmit}>

            <div className="PlayerSubmissionForm__poem-inputs">

              <input name="adj1" placeholder="adjective" type="text" value={this.state.adj1} onChange={this.onInputChange}/>
              <input name="noun1" placeholder="noun" type="text" value={this.state.noun1} onChange={this.onInputChange}/>
              <input name="adv" placeholder="adverb" type="text" value={this.state.adv} onChange={this.onInputChange}/>
              <input name="verb" placeholder="verb" type="text" value={this.state.verb} onChange={this.onInputChange}/>
              <input name="noun2" placeholder="noun" type="text" value={this.state.noun2} onChange={this.onInputChange}/>
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
  };
