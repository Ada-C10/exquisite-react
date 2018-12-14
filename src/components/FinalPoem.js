import React from 'react';
import './FinalPoem.css';

class FinalPoem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      finalPoemHeaderClass: "FinalPoem__poem hide",
      singleLine: "test",
      revealPoemButton: "FinalPoem__reveal-btn",
    }
  }

  showPoem = () => {
    this.setState({finalPoemHeaderClass: "FinalPoem__poem"});
    this.setState({revealPoemButton: "FinalPoem__reveal-btn hide"})
    this.props.hideRecentCallback();
  }

  render(){

    const allLines = this.props.poemLines;
    const final = allLines.join('\n');

    return (
      <div className="FinalPoem">
        <section className={this.state.finalPoemHeaderClass}>
          <h3>Final Poem</h3>
          <p className="poem">{final}</p>
        </section>

        <div className="FinalPoem__reveal-btn-container">
          <input type="button" value="We are finished: Reveal the Poem" className={this.state.revealPoemButton}
            onClick={this.showPoem}
            />
        </div>
      </div>
    )
  }
}


export default FinalPoem;
