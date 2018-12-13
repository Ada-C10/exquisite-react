import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

  const hideSubmissionHeader = props.showSubmissionHeader ? <h3>The Most Recent Submission</h3> : <ul></ul>

const showLatestLine = props.poemList

  return (
    <div className="RecentSubmission">

      <div> {hideSubmissionHeader}</div>
      <p className="RecentSubmission__submission">{ showLatestLine }</p>
    </div>
  );
}

export default RecentSubmission;
