import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  if (props.showPoem) {
    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          {props.lines}
        </section>
      </div>
    );
  };
  return (
    <div className="FinalPoem">
      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.renderFinalCallback} />
      </div>
    </div>
  );
}

export default FinalPoem;
