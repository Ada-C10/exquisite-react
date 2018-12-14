import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  let fullPoem = props.poemDraft.map((row, i) => {
    if (props.poemDraft.length > 0) {
      return <p key={i}>{row}</p>;
    }
    else {
      return {}
    }
  });

  let showPoem = props.showPoem

  const onFinishedPoem = (event) => {
    event.preventDefault();
    props.revealPoemCB();
  }

  return (
    <div className="FinalPoem">

      {showPoem ? <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {fullPoem}
      </section> : ''}

      {!showPoem ? <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn"
          onClick={onFinishedPoem}
          />
      </div> : ''}
    </div>
  );
}

export default FinalPoem;
