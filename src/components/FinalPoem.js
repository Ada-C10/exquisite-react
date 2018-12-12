import React from 'react';
import './FinalPoem.css';


const displayPoem = (poem) => poem.map(function(line, key) {
    return (
      <span key={key}>
        {line}
        <br/>
        <br/>
      </span>
    )
})


const FinalPoem = (props) => {

  const revealPoem = () => {
    return (
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
          {displayPoem(props.poem)}

      </section>
    )
  }

  console.log(props.poem)
  return (
    <div className="FinalPoem">
      {props.poem === false ? "" : revealPoem()}
      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
