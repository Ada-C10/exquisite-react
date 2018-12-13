import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  const poemList = props.submissions.map((submission, i) =>
  <li key={i}>
    {submission.toString()}</li>
  );

  const revealPoem = <ul> { poemList }</ul>

  const showAllLines = props.showPoem ? revealPoem : <ul></ul>

  const hideButton = props.showPoem ? <ul></ul> :
    <div className="FinalPoem__reveal-btn-container">
    <input
      type="button"
      value="We are finished: Reveal the Poem"
      className="FinalPoem__reveal-btn"
      onClick={props.finalPoem}
      />
    </div>




  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
      </section>
      <div className="FinalPoem__reveal-btn-container">
        {hideButton}
      </div>
      <div>
        { showAllLines }
      </div>
    </div>
  );
}

export default FinalPoem;
