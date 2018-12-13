import React from 'react';
import './RecentSubmission.css';



const RecentSubmission = (props) => {
  console.log("i am in RecentSubmission");
  // console.log(props.recentPoem);

  let showRecent = () => {

    if (props.recentPoem) {
      console.log("i am in showRecent when adj1 exists");
      if (props.recentPoem.adj1) {
        let oneLinePoem = `The ${props.recentPoem.adj1} ${props.recentPoem.noun1} ${props.recentPoem.adv} ${props.recentPoem.verb} the ${props.recentPoem.adj2} ${props.recentPoem.noun2}.`;
        return <div className="RecentSubmission">
          <h3>The Most Recent Submission</h3>
          <p className="RecentSubmission__submission">{ oneLinePoem }</p>
        </div>;
      }

    }
    else
    {
      console.log("adj1 does not exist");
      return
    }
  }

  // let oneLinePoem = `The ${props.recentPoem.adj1} ${props.recentPoem.noun1} ${props.recentPoem.adv} ${props.recentPoem.verb} the ${props.recentPoem.adj2} ${props.recentPoem.noun2}.`
  return (
    <div>
    {showRecent()}
    </div>
  );
}

export default RecentSubmission;
