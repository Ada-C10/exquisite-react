import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

  let submission;
  if (props.recentSubmission) {
    submission = <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ props.recentSubmission }</p>
    </div>
  }

  return (
    <div className="RecentSubmission">
      {submission}
    </div>
  );
}

export default RecentSubmission;
