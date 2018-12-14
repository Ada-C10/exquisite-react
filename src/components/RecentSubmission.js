import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

  let finalIndex = (props.poemDraft.length) - 1
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
