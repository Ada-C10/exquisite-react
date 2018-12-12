import React from 'react';
import './FinalPoem.css';

class FinalPoem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      finalPoemHeaderClass: "FinalPoem__poem hide",
      singleLine: "test",
    }
  }

  showPoem = () => {
    this.setState({finalPoemHeaderClass: "FinalPoem__poem"});
  }

  render(){

    const allLines = this.props.linesOfPoem;
    const final = allLines.join('\n');

    return (
      <div className="FinalPoem">
        <section className={this.state.finalPoemHeaderClass}>
          <h3>Final Poem</h3>
          <p className="poem">{final}</p>
        </section>

        <div className="FinalPoem__reveal-btn-container">
          <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn"
            onClick={this.showPoem}
            />
        </div>
      </div>
    )
  }
}


export default FinalPoem;
