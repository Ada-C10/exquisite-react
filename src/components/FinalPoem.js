import React from 'react';
import './FinalPoem.css';

class FinalPoem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cadaver: "",
      finalSubmit: this.props.finalSubmit,
    }
  }

  composeCadaver = (e) => {
    const cadaver = this.props.finalPoemCallback();
    this.setState({
      cadaver: cadaver,
      finalSubmit: true
    });
  }

  render() {
    const divider = this.state.finalSubmit ? "FinalPoem__poem" : null;

    return (
      <div className="FinalPoem">
        <section className={divider}>
          { this.state.cadaver !== "" ? <h3>Final Poem</h3> : null }
          { this.state.cadaver !== "" ? (this.state.cadaver) : null }
        </section>

        <div className="FinalPoem__reveal-btn-container">
          { this.state.finalSubmit !== true ? <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={this.composeCadaver}/> : null }
        </div>
      </div>
    );
  }
}


export default FinalPoem;
