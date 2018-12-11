import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adj1: "",
      noun1: "",
      adverb: "",
      verb: "",
      adj2: "",
      noun2: "",
    }
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            <h2>The</h2>
            <input
              name="adj1"
              value={this.state.adj1}
              placeholder="adjective"
              type="text"
              onChange={this.onInputChange} />
              <input
                name="noun1"
                value={this.state.noun1}
                placeholder="noun"
                type="text"
                onChange={this.onInputChange} />
                <input
                  name="adverb"
                  value={this.state.adverb}
                  placeholder="adverb"
                  type="text"
                  onChange={this.onInputChange} />
                <input
                  name="verb"
                  value={this.state.verb}
                  placeholder="verb"
                  type="text"
                  onChange={this.onInputChange} />
                <h3>the</h3>
                <input
                  name="adj2"
                  value={this.state.adj2}
                  placeholder="adjective"
                  type="text"
                  onChange={this.onInputChange} />
                <input
                  name="noun2"
                  value={this.state.noun2}
                  placeholder="noun"
                  type="text"
                  onChange={this.onInputChange} />
                <h3>.</h3>
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
