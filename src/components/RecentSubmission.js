import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  console.log(props);
  const displayLine = (props) => {
    if (props != undefined){
      const line = `The ${props.adjective1}  ${props.noun1}  ${props.adverb}  ${props.verb} the  ${props.adjective2}   ${props.noun2}`;
      return line
    };
  }

  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ displayLine(props.recentLine) }</p>
    </div>
  );
}

export default RecentSubmission;
