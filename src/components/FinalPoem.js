import React from 'react';
import './FinalPoem.css';


const handleClick = () => {
    console.log("I was clicked")
}




const FinalPoem = (props) => {

  // finalDisplay = (props.poem) => {
  //   props.poem.each
  //   puts line;
  // }

  console.log(props.submissions)
  const test2 = props.submissions

// const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)



  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>

      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={handleClick} />
        {test2}




        <h3 className="test">TEST</h3>


        //on button click, show stuff
        //maybe give it a class that keeps the poem hidden until the button is clicked
        //function should push each line within forEach
        //then print the result below


      </div>
    </div>
  );
}

export default FinalPoem;
