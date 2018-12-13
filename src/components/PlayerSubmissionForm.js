import React, { Component } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
  }

  fetchFields = () => {
    const fields = this.props.fields.filter((field) => {
      return field.hasOwnProperty("key");
    });
    return fields;
  }

  // {
  //   key: 'adj1',
  //   placeholder: 'adjective',
  // },
  // {
  //   key: 'noun1',
  //   placeholder: 'noun',
  // },
  // {
  //   key: 'adv',
  //   placeholder: 'adverb',
  // },
  // {
  //   key: 'verb',
  //   placeholder: 'verb',
  // },
  // {
  //   key: 'adj2',
  //   placeholder: 'adjective',
  // },
  // {
  //   key: 'noun2',
  //   placeholder: 'noun',
  // },

  componentDidMount() {
    console.log(this.fetchFields())
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
            }
            <label htmlFor="adjective">Name</label>
            <input name="adj1" type="text" defaultValue={1}/>

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

PlayerSubmissionForm.propTypes = {
  fields: PropTypes.array.isRequired,
};
