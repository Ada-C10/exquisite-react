import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const poem = props.poem

  const lyrics = props.finalpoem

  const finalpoem =  lyrics.map((sentence, index) => <div key={index}>{sentence}</div>)


  const showPoem = () => {
    poem();
  }


  if(props.finalPoemBool === false){
    return (<section className="FinalPoem__poem">
    <h3>Final Poem</h3>
    {finalpoem}
  </section>)
}

return (



  <div className="FinalPoem">
    <section className="FinalPoem__poem">
      <h3>Final Poem</h3>
      {finalpoem}
    </section>

    <div className="FinalPoem__reveal-btn-container">
      <input type="button" onClick={showPoem} value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
    </div>
  </div>
);
}

export default FinalPoem;
