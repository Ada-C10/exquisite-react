import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const lines = props.lines;

  const finalPoem = lines.map((line, i) => {
    if (props.poemStatus) {
      return <p>{line}</p>
    };
  });

return (
  <div className="FinalPoem">

    <section className="FinalPoem__poem">
      <h3>Final Poem</h3>
      {finalPoem}
    </section>

  </div>
);
}

export default FinalPoem;
