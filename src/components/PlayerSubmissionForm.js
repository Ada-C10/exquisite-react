import React, { Component } from 'react';
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
      noun2: ''
    }
  }

  adjective1Valid = () => {
    return /^[a-zA-Z]+$/.test(this.state.adjective1)
  }

  noun1Valid = () => {
    return /^[a-zA-Z]+$/.test(this.state.noun1)
  }

  adverbValid = () => {
    return /^[a-zA-Z]+$/.test(this.state.adverb)
  }

  verbValid = () => {
    return /^[a-zA-Z]+$/.test(this.state.verb)
  }

  adjective2Valid = () => {
    return /^[a-zA-Z]+$/.test(this.state.adjective2)
  }

  noun2Valid = () => {
    return /^[a-zA-Z]+$/.test(this.state.noun2)
  }

  onAdjective1Change = (event) => {
    console.log('adjective1 update')
    this.setState({
      adjective1: event.target.value,
    });
  }

  onNoun1Change = (event) => {
    console.log('noun1 update')
    this.setState({
      noun1: event.target.value,
    });
  }

  onAdverbChange = (event) => {
    console.log('adverb update')
    this.setState({
      adverb: event.target.value,
    });
  }

  onVerbChange = (event) => {
    console.log('verb update')
    this.setState({
      verb: event.target.value,
    });
  }

  onAdjective2Change = (event) => {
    console.log('adjective2 update')
    this.setState({
      adjective2: event.target.value,
    });
  }

  onNoun2Change = (event) => {
    console.log('noun2 update')
    this.setState({
      noun2: event.target.value,
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const poemLine = `${this.state.adjective1} ${this.state.noun1} ${this.state.adverb} ${this.state.verb} the ${this.state.adjective2} ${this.state.noun2}`

    this.setState({
      adjective1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: ''
    });

    this.props.addPoemLineCallback(poemLine)

  }


  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.getLineCountCallback()}</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            <input
              onChange={this.onAdjective1Change}
              value={this.state.adjective1}
              placeholder="adjective"
              className={this.adjective1Valid() ? "input": "PlayerSubmissionFormt__input--invalid"}
              name="adjective1" />

            <input
              onChange={this.onNoun1Change}
              value={this.state.noun1}
              placeholder="noun"
              className={this.noun1Valid() ? "valid": "PlayerSubmissionFormt__input--invalid"}
              name="noun1" />

            <input
              onChange={this.onAdverbChange}
              value={this.state.adverb}
              placeholder="adverb"
              className={this.adverbValid() ? "valid": "PlayerSubmissionFormt__input--invalid"}
              name="adverb" />

            <input
              onChange={this.onVerbChange}
              value={this.state.verb}
              placeholder="verb"
              className={this.verbValid() ? "valid": "PlayerSubmissionFormt__input--invalid"}
              name="verb" />

            <input
              onChange={this.onAdjective2Change}
              value={this.state.adjective2}
              placeholder="adjective"
              className={this.adjective2Valid() ? "input": "PlayerSubmissionFormt__input--invalid"}
              name="adjective2" />

            <input
              onChange={this.onNoun2Change}
              value={this.state.noun2}
              placeholder="noun"
              className={this.noun2Valid() ? "valid": "PlayerSubmissionFormt__input--invalid"}
              name="noun2" />

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" onClick={this.onFormSubmit}/>
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
