import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const fullPoem = props.poem.map((line) => {
    return (
      <p>
        {line}
      </p>
    )
  });


  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {
          props.revealPoem && fullPoem
        }

      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.revealPoemCallback} />
      </div>
    </div>
  );
}

export default FinalPoem;
