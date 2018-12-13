import React from 'react';
import './FinalPoem.css';
// import PlayerSubmissionForm from './PlayerSubmissionForm.js'

const FinalPoem = (props) => {

  let parsePoems = () => {
    console.log("i am in parsePoems");
    let allPoemsShown = [];
    for (let onePoem of props.finalPoem) {
      allPoemsShown.push(Object.values(onePoem).join(" "));
    }

    return allPoemsShown.map((line) => {
      return <p>{line}</p>
    });
  };

  let showFinalPoem = () => {
    console.log("im in showFinalPoem");
    if (props.showresults) {
      return <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <div>{parsePoems()}</div>
      </section>
    }
    else {
      return <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.callback}/>
      </div>
    }
  };

  // let changeShowResultsToTrue = () => {
  //   console.log("I'm in changeShowResultsToTrue in FinalPoem");
  //   console.log(props.callback);
  //   return props.callback;
  // };

  return (
    <div className="FinalPoem">
      <div>{showFinalPoem()}</div>



    </div>
  );
}

export default FinalPoem;
