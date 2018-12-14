import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>

      </section>

      <div>
        {props.poem}
      </div>
    </div>
  );
}

export default FinalPoem;
