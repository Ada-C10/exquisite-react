import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
    console.log(props);
    const displayFinalLines = (props) => {
      if (props.status === true){
        if (props !== undefined){

          let poemLines = "";
          props.finalLines.forEach((line, i) => {

            const linesForFinal = `The ${line.adjective1}  ${line.noun1}  ${line.adverb}  ${line.verb} the  ${line.adjective2}   ${line.noun2}`;

            poemLines += linesForFinal;

          })
          return poemLines;
        };
      }
    }
    // const onClickDisplay = (event) => {
    //   props.callbackDisplayPoem();
    // }

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <div>{displayFinalLines(props)}</div>
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn"
            onClick={()=> props.callbackDisplayPoem()}
            />
      </div>
    </div>
  );
}

export default FinalPoem;
