import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  // let adjective1 = props.adjective1
  // let noun1 = props.noun1
  // let adverb1 = props.adverb1
  // let verb1 = props.verb1
  // let adjective2 = props.adjective2
  // let noun2 = props.noun2
  //
  // let fullPoem = `The ${adjective1} ${noun1} ${adverb1} ${verb1} the ${adjective2} ${noun2}`

  let fullPoem = props.poemDraft.map((row, i) => {
  if (props.poemDraft.length > 0) {
    return <p key={i}>{row}</p>
}})

let showPoem = props.showPoem
let showPoemRevealButton = props.showPoemRevealButton






  // const onFinishedPoem = (event) => {
  //   event.preventDefault();
  //
  //   props.revealPoem();



    // const displayPoem = () => {
    //   if (props.finishedPoem === true) {
    //
    //   }
    // }
    // const submittedPoemLine = {
    //   adjective1: this.state.adjective1,
    //   noun1: this.state.noun1,
    //   adverb1: this.state.adverb1,
    //   verb1: this.state.verb1,
    //   adjective2: this.state.adjective2,
    //   noun2: this.state.noun2,
    // };
    //
    // this.setState({
    //   adjective1: '',
    //   noun1: '',
    //   adverb1: '',
    //   verb1: '',
    //   adjective2: '',
    //   noun2: '',
    // });


  return (
    <div className="FinalPoem">
      {showPoem ? <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
          {fullPoem}


      </section> : ''}

      {showPoemRevealButton ? <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn"
         />
      </div> : ''}
    </div>
  );
}

export default FinalPoem;
