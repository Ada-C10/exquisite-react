import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;

// <p>The {this.props.adj1} {this.props.noun1} {this.props.adverb} {this.props.verb} the {this.props.adj2} {this.props.noun2} </p>
