import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {


  let adjective1 = props.adjective1
  let noun1 = props.noun1
  let adverb1 = props.adverb1
  let verb1 = props.verb1
  let adjective2 = props.adjective2
  let noun2 = props.noun2

  let fullPoem = `The ${adjective1} ${noun1} ${adverb1} ${verb1} the ${adjective2} ${noun2}`

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>

      <p>{fullPoem}</p>

      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
