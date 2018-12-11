import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

  let currentLine = props.currentLine;

  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ currentLine }</p>
    </div>
  );
}

export default RecentSubmission;
