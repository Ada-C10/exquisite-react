import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

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
    console.log("Input change method in PlayerSubmission");

    const field = event.target.name;
    const value = event.target.value;

    const formInput = {};
    formInput[field]=value;
    this.setState(formInput);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newLine = ["The", this.state.adj1, this.state.noun1, this.state.adv, this.state.verb, "the", this.state.adj2, this.state.noun2].join(" ");


    this.props.addSubmissionCallback(newLine);

    console.log("New line form submitted:", newLine);

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
        <h3>Player Submission Form for Player #{this.props.playerNumber}</h3>

        <form className="PlayerSubmissionForm__form"
          onSubmit={this.onFormSubmit}
          >
          <div className="PlayerSubmissionForm__poem-inputs">
            <div>
              The
              <input
                name="adj1"
                placeholder="adjective"
                value={this.state.adj1}
                onChange={this.onInputChange}
                />
            </div>
            <div>
              <input
                name="noun1"
                placeholder="noun"
                value={this.state.noun1}
                onChange={this.onInputChange}
                />
            </div>
            <div>
              <input
                name="adv"
                placeholder="adverb"
                value={this.state.adv}
                onChange={this.onInputChange}
                />
            </div>
            <div>
              <input
                name="verb"
                placeholder="verb"
                value={this.state.verb}
                onChange={this.onInputChange}
                />
            </div>
            <div>
              the
              <input
                name="adj2"
                placeholder="adjective"
                value={this.state.adj2}
                onChange={this.onInputChange}
                />
            </div>
            <div>
              <input
                name="noun2"
                placeholder="noun"
                value={this.state.noun2}
                onChange={this.onInputChange}
                />
            </div>
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
