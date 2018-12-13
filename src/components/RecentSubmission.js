import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

  const recentSentence = props.sentences
  let sentence = recentSentence[(recentSentence.length) -1]

  if (sentence) {
    sentence = sentence.adjective1 + " " +  sentence.noun1  + " " + sentence.adverb + " " + sentence.verb  + " " + sentence.adjective2 + " " + sentence.noun2
  }

  console.log(sentence);
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">
        { sentence  }
      </p>
    </div>
  );
}

export default RecentSubmission;
