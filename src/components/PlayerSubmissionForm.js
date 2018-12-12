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
      noun2: ''
    }
  }

  onInputChange = (event) => {
    console.log("input change")

    const field = event.target.name;
    const value = event.target.value;

    const newState = {}
    newState[field] = value;
    this.setState(newState);
  }


  onFormSubmit = (event) => {
    event.preventDefault();

    const newRecentSubmission =
// `The ${this.state.adj1} ${this.state.noun1} ${this.state.adv} ${this.state.verb} the ${this.state.adj2} ${this.state.noun2}.`

    {line: `The ${this.state.adj1} ${this.state.noun1} ${this.state.adv} ${this.state.verb} the ${this.state.adj2} ${this.state.noun2}.`
    }

    // {
    //   adj1: this.state.adj1,
    //   noun1: this.state.noun1,
    //   adv: this.state.adv,
    //   verb: this.state.verb,
    //   adj2: this.state.adj2,
    //   noun2: this.state.noun2
    // };


    this.setState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: ''
    });

    console.log('created new poem line', newRecentSubmission);
    this.props.addRecentSubmissionCallback(newRecentSubmission);


  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form"
          onSubmit={this.onFormSubmit} >

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
            }

              The
              <input name = "adj1" placeholder="adjective" type="text" class="PlayerSubmissionForm__input--invalid" value={this.state.adj1}
              onChange={this.onInputChange} />

            <input name = "noun1" placeholder="noun" type="text" class="PlayerSubmissionForm__input--invalid" value={this.state.noun1}
              onChange={this.onInputChange} />

            <input name = "adv" placeholder="adverb" type="text" class="PlayerSubmissionForm__input--invalid" value={this.state.adv}
              onChange={this.onInputChange} />

            <input name = "verb" placeholder="verb" type="text" class="PlayerSubmissionForm__input--invalid" value={this.state.verb}
              onChange={this.onInputChange} />

              the

              <input name = "adj2" placeholder="adjective" type="text" class="PlayerSubmissionForm__input--invalid" value={this.state.adj2}
              onChange={this.onInputChange} />

            <input name = "noun2" placeholder="noun" type="text" class="PlayerSubmissionForm__input--invalid" value={this.state.noun2}
              onChange={this.onInputChange} />

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
