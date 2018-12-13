import React from 'react';
import './FinalPoem.css';


class FinalPoem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      poemClass: 'Hide_element',
      buttonClass: 'FinalPoem__reveal-btn'
    }
  }


  render () {

    const showPoem = () => {
        this.setState({ poemClass: 'FinalPoem_poem', buttonClass: 'Hide_element'})
        this.props.hideComponentsCallback()
    }

    const finalPoem = this.props.lines.map((line) =>
        <p>{line.line}</p>
    );

    return (
      <div className="FinalPoem">
        <section className= {this.state.poemClass}>
          <h3>Final Poem</h3>
          {finalPoem}

        </section>

        <div className="FinalPoem__reveal-btn-container">
          <input type="button" value="We are finished: Reveal the Poem" className= {this.state.buttonClass} onClick={showPoem} />
        </div>
      </div>
    );
  }
}


export default FinalPoem;
