import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const showPoem = () => {
    let linesOfPoem = props.linesOfPoem;
    console.log(...linesOfPoem);

  }

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <p></p>
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn"
          onClick={showPoem}/>
      </div>
    </div>
  );
}

export default FinalPoem;
