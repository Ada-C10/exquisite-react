import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const changePoemStatus = () => {
    console.log("status:", props.poemStatus);
    props.changePoemStatus();
  };


  const lines = props.lines;

  const poem = lines.map((line, i) => {
    if (props.poemStatus) {
      return <div>{line}</div>
    };
  });



return (
  <div className="FinalPoem">
    <section className="FinalPoem__poem">
      <h3>Final Poem</h3>
      {poem}
    </section>

    <div className="FinalPoem__reveal-btn-container">
      <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={changePoemStatus} />
    </div>
  </div>
);
}

export default FinalPoem;
