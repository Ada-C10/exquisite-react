import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const formattedPoem = props.poem.map((line, i) => {
    return <p key={i}>{line}</p>
  })

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {props.displayPoem && formattedPoem}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        {!props.displayPoem && <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick = {props.revealPoem}/>}
      </div>
    </div>
  );
}

export default FinalPoem;
