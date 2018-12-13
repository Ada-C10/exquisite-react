import React from 'react';
import './FinalPoem.css';


class FinalPoem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      poemClass: 'Poem_hidden'
    }
  }

  render () {

    const showPoem = () => {

        this.setState({ poemClass: 'FinalPoem_poem'})
        console.log("I was clicked")
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
          <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={showPoem} />


        </div>
      </div>
    );


  }

}



export default FinalPoem;


//on button click, show stuff
//maybe give it a class that keeps the poem hidden until the button is clicked
//function should push each line within forEach
//then print the result below
