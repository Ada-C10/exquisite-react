import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  
  const getSubmission = () => {
    if (props.poemLine !== undefined) {
      return (
        <div>
          <h3>The Most Recent Submission</h3>
          <p className="RecentSubmission__submission">{ props.poemLine }</p>
        </div>
      )
    }
  }

  return (
    <div className="RecentSubmission">
      {getSubmission()}
    </div>
  );
}

export default RecentSubmission;
