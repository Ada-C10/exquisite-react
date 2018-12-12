import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
        <p>{props.recentSubmission}</p>
      <p className="RecentSubmission__submission">{  }</p>
    </div>
  );
}

export default RecentSubmission;
