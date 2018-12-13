import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types';

const RecentSubmission = (props) => {
  return (
    <div className="RecentSubmission">
      { !props.ended && (<h3>The Most Recent Submission</h3>) }
      { !props.ended && (<p className="RecentSubmission__submission">{ props.line }</p>) }
    </div>
  );
}

export default RecentSubmission;

RecentSubmission.propTypes = {
  line: PropTypes.string,
  ended: PropTypes.bool.isRequired,
};
