import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

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

FinalPoem.propTypes = {
  onFinalPoemClickCallback: PropTypes.func
}

export default FinalPoem;
