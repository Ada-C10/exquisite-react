import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  if (props.hideForm) {
    return (<div className="RecentSubmission" />)
  };

  let lastSubmission = props.lastSubmission
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ lastSubmission }</p>
    </div>
  );
}

export default RecentSubmission;
