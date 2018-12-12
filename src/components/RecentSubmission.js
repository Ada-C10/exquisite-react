import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {


  if (props.render) {
    // console.log(props.submissions)
    return <div></div>
  }

  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{props.recentSubmission}</p>
    </div>
  );
}

export default RecentSubmission;
