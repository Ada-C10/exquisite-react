import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

  const hideSubmissionHeader = props.showSubmissionHeader ? <h3>The Most Recent Submission</h3> : <ul></ul>

let showLatestLine = () => {
  if( props.showLatestLine) {
    console.log(props.showLatestLine );

    return <div className="RecentSubmission">
      <h3>Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ props.showLatestLine }</p>
    </div>
  } else {

  }
}
return (
  // <div className="RecentSubmission">
  <div>
    <section> { hideSubmissionHeader }</section>
    <section> { showLatestLine() }</section>
  </div>
);
}

export default RecentSubmission;
