import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  console.log(props.submissions);

  const finalPoem =
    props.submissions.map((submission, i) => {
      return <p key={i}>{submission}</p>
  });

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
          {finalPoem}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
