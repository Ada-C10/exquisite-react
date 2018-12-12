import React from 'react';
import './FinalPoem.css';



const FinalPoem = (props) => {

  const poem = props.poem.map(function(line, key) {
    return (
      <span key={key}>
        {line}
        <br/>
        <br/>
      </span>
    )
  })

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
          {poem}

      </section>
      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
