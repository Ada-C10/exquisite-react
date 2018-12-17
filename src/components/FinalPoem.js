import React from 'react';
import './FinalPoem.css';

class FinalPoem extends React.Component {

  constructor(props) {
    super(props);
    console.log("poem", props.poem);

    this.state = {
      finalPoem:'',
    }
  }

  endGame = (e) => {
    const poem = this.props.poem.map((line) => {
      return <p>{line}</p>
    });

    this.setState({
      finalPoem: poem,
    });

    this.props.endGameCallback(poem)
  }
  render() {
    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          {this.state.finalPoem}
        </section>

        <div className="FinalPoem__reveal-btn-container">
          <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={this.endGame}/>
        </div>
      </div>
    );
  }
}

export default FinalPoem;
