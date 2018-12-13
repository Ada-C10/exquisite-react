import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

  // TODO:
  // - dry it up
  // - child of finalpoem?

  // console.log(`${props}`)

  // i guess gotta change state here? check student ex (a student within student collecton like a recent submission in final poem)


  // let adjective1 = props.adjective1
  // let noun1 = props.noun1
  // let adverb1 = props.adverb1
  // let verb1 = props.verb1
  // let adjective2 = props.adjective2
  // let noun2 = props.noun2



  // let recentUserSubmission = `The ${adjective1} ${noun1} ${adverb1} ${verb1} the ${adjective2} ${noun2}`

  let finalIndex = props.poemDraft.length - 1

  let recentUserSubmission = props.poemDraft[finalIndex]






  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">
        <p>{recentUserSubmission}</p>
      </p>
    </div>
  );
}

export default RecentSubmission;
