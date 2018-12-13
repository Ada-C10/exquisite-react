import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  //Why doesnt it like it if I space out the html elements? It throws the error 'Expected an assignment or function call and instead saw an expression'
  if (props.render) {
    return <div> <section className="FinalPoem__poem">
            <h3>Final Poem</h3>
            <p>{props.submissions}</p>
          </section>
            </div>
  }


  return (
    <div className="FinalPoem">

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={ props.mountFinalPoemCallback }/>
      </div>
    </div>
  );
}

export default FinalPoem;
