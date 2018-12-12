import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const lines = props.allLines.map((line, i) => {
    return <p key={i}>{line}</p>
  });

  let display = props.isFinal ?
  <section className="FinalPoem__poem">
    <h3>Final Poem</h3>
    {lines}
  </section> :
  <div className="FinalPoem__reveal-btn-container">
    <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.onFinalPoemClickCallback}/>
  </div>
  
  return (
    <div className="FinalPoem">
      {display}
    </div>
  );
}

export default FinalPoem;
