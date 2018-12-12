import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  // const onButtonClick = (event) => {
  //   render = true;
  // }


  // if (props.render) {
  //   // console.log(props.submissions)
  //   let full = []
  //   props.submissions.forEach(function(submission) {
  //     let line = <p>The {submission.adj1} {submission.noun1} {submission.adverb} {submission.verb} the {submission.adj2} {submission.noun2}</p>
  //     full.push(line)
  //   });
  //   return <div>{full}</div>
  // }
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
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={ props.finalPoemCallback }/>
      </div>
    </div>
  );
}

export default FinalPoem;

// <p>The {this.props.adj1} {this.props.noun1} {this.props.adverb} {this.props.verb} the {this.props.adj2} {this.props.noun2} </p>

// The {submission.adj1} {submission.noun} {submission.adverb} {submission.verb} the {submission.adj2} {submission.noun2}
