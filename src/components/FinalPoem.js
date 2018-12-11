import React from 'react';
import './FinalPoem.css';

class FinalPoem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      finalPoemHeaderClass: "FinalPoem__poem hide",
    }
  }

  showPoem = () => {
    this.setState({finalPoemHeaderClass: "FinalPoem__poem"});
  }

  render(){
    return (
      <div className="FinalPoem">
        <section className={this.state.finalPoemHeaderClass}>
          <h3>Final Poem</h3>
          <p>{this.props.linesOfPoem}</p>
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
