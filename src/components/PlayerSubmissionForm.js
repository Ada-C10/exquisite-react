import React, { Component } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {};
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
  // },f
  // {
  //   key: 'adj2',
  //   placeholder: 'adjective',
  // },
  // {
  //   key: 'noun2',
  //   placeholder: 'noun',
  // },

  componentDidMount() {
    //set state according to field.key
    this.fetchFields().forEach( (field) => {
      this.setState({
        [field.key]: ""
      })
    })
  }

  onInputChange = (event) => {
    console.log("Some stuff was typed in the form!", event.target.name, event.target.value);

    const field = event.target.name;
    const value = event.target.value;

    const updateState = this.state;
    updateState[field] = value;
    this.setState(updateState);
  }


  render() {


    const inputs = this.fetchFields();

    const filteredInputs = inputs.forEach((input) => {
      // const key = input.key
      // return(
      //   <input name={input.key} placeholder={input.placeholder} type="text" value={this.state[input.key]} onChange={this.onInputChange}/>
      // )
      console.log("state", this.state)
    })

    console.log(filteredInputs)


    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
            }


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
