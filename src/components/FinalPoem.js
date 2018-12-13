import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  console.log(props.submissions);

  const finalPoem =
    props.submissions.map((submission, i) => {
      return <p key={i}>{submission}</p>
  });

  let poem;
  if (props.isSubmitted) {
      poem = <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
          {finalPoem}
      </section>
    }

  let revealButton;
  if(!props.isSubmitted){
    revealButton = <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn"onClick={props.onRevealClick} />
  }

  return (
    <div className="FinalPoem">
      {poem}

      <div className="FinalPoem__reveal-btn-container">
        {revealButton}
      </div>
    </div>
  );
}

export default FinalPoem;
