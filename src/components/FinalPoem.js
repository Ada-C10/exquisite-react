import React from 'react';
import './FinalPoem.css';

class FinalPoem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cadaver: "",
    }
  }

  composeCadaver = (e) => {
    const cadaver = this.props.finalPoemCallback();
    this.setState({
      cadaver: cadaver
    });
  }

  render() {
    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          { this.state.cadaver !== "" ? <h3>Final Poem</h3> : null }
          { this.state.cadaver !== "" ? (this.state.cadaver) : null }
        </section>

        <div className="FinalPoem__reveal-btn-container">
          <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={this.composeCadaver}/>
        </div>
      </div>
    );
  }
}


export default FinalPoem;
