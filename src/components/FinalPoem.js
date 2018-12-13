import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  console.log(props);
  const displayFinalLines = (props) => {
    if (props !== undefined){
      if (props.status === true){

        let poemLines = "";
        props.finalLines.forEach((line, i) => {

          const linesForFinal = `The ${line.adjective1} ${line.noun1} ${line.adverb}  ${line.verb} the ${line.adjective2} ${line.noun2}.\n`;

          poemLines += linesForFinal;
        })
        let newLine = poemLines.split('\n').map(i => {
          return <p>{i}</p>
        });
        return newLine;
      };
    }
  }

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <div>{displayFinalLines(props)}</div>
      </section>

      <div className="FinalPoem__reveal-btn-container">
        {!props.status && <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn"
            onClick={()=> props.callbackDisplayPoem()}
            />}
      </div>
    </div>
  );
}

export default FinalPoem;
