import React from 'react';
import './FinalPoem.css';


const FinalPoem = (props) => {

  if (props.isSubmitted === true)
  return (
    <div>
      {props.submissions.map((submission, index) => {
        return(
          <p key={index}> {submission}</p>
        )
      })
    }

  </div>
)
return (
  <div className="FinalPoem">
    <section className="FinalPoem__poem">
      <h3>Final Poem</h3>

    </section>

    <div className="FinalPoem__reveal-btn-container">
      <input
        type="button"
        value="We are finished: Reveal the Poem"
        className="FinalPoem__reveal-btn"
        onClick={props.onFinalButtonClick} />
    </div>
  </div>
);
}

export default FinalPoem;
