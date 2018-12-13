import React from 'react';
import './FinalPoem.css';
// import PlayerSubmissionForm from './PlayerSubmissionForm.js'

const FinalPoem = (props) => {
//after you press submit line, recent submission should show up and not show up in final sub
//so all subs should stay in game, so maybe i should parse all of these in the games??
//but ok, so hold onto them, then only when i click on the button should i first! get rid of recent sub and new sub once i click on it
// so lets first focus on that ok
//so i can put a conditional in the games saying hey, after i click on the button which is in here, get rid of those 2, but the conditional can only be in games while the input is in final poem, so maybe on click go up to the function in game
  let parsePoems = () => {
    let allPoemsShown = [];
    for (let onePoem of props.finalPoem) {
      allPoemsShown.push(Object.values(onePoem).join(" "));
    }

    return allPoemsShown.join(" ");
  }

  // const showFinalSub = () => {
  //   this.props.showFinalSubinGames();
  // }

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <div>{parsePoems()}</div>
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>

    </div>
  );
}

export default FinalPoem;
