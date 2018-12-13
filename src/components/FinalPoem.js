import React from 'react';
import './FinalPoem.css';
// import PlayerSubmissionForm from './PlayerSubmissionForm.js'

const FinalPoem = (props) => {

  let parsePoems = () => {
    let allPoemsShown = [];
    for (let onePoem of props.finalPoem) {
      allPoemsShown.push(Object.values(onePoem).join(" "));
    }

    return allPoemsShown.map((line) => {
      return <p>{line}</p>
    });
  }

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <div>{parsePoems()}</div>
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>

    </div>
  );
}

export default FinalPoem;
