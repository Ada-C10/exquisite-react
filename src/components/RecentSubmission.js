import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  console.log(props)
  if (props.recentSubmission !== undefined && props.isSubmitted === false) {

    return (
      <div className="RecentSubmission">
        <h3>The Most Recent Submission</h3>
        <p className="RecentSubmission__submission">{ props.recentSubmission }</p>
      </div>
    );
  }
  return (
    null
  )
}

export default RecentSubmission;
