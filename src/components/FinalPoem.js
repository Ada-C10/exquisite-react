import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  let poem = ""
  props.ended ? poem = props.poem.join('') : poem = ""

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>

      </section>
      <p>{poem}</p>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.revealPoemCallback} />
      </div>
    </div>
  );
}

export default FinalPoem;
