import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {
  const poem = props.poem.join('')

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
      </section>
      { props.ended && (<p>{poem}</p>) }
      { !props.ended && (<div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.revealPoemCallback} />
      </div>) }
    </div>
  );
}

export default FinalPoem;

FinalPoem.propTypes = {
  poem: PropTypes.array.isRequired,
  revealPoemCallback: PropTypes.func.isRequired,
  ended: PropTypes.bool.isRequired,
};
