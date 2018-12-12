import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {


  if (props.render) {
    // console.log(props.submissions)
    return <div></div>
  }
  if (props.firstSubmission) {
    // console.log(props.submissions)
    return <div className="RecentSubmission">
          <h3>The Most Recent Submission</h3>
            <p className="RecentSubmission__submission">{props.recentSubmission}</p>
          </div>
  }


  return (
    <div className="RecentSubmission">
    </div>
  );
}

export default RecentSubmission;
