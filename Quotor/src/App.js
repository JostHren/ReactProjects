import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [rerender, setRerender] = useState();
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
  
  let quote = ["My first quote", "Second is always better", "Three is the thing", "Love is 4ever", "Gimme 5 or die"]
  let author = ["Wise Man", "Wiser Man", "Just a Woman", "LoveMaker", "Stranger on the Run"]
  let randomNumber = getRandomInt(quote.length);

  let quoteSelect = quote[randomNumber];
  let authorSelect = author[randomNumber];

  let tweetUrl = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent(`"${quoteSelect}." ${authorSelect}`);
  
  useEffect(() => {
    document.title = quoteSelect;
  }, [rerender])
  
  return (
    <div className="App-header" >
      <div className="text-center" id="quote-box">
        <h5 className="text-center mb-3">
          -- Quotor --
        </h5>

        <p className="App-link" id="text">
          {quoteSelect}
          </p> 
        <span className="Author" id="author">{authorSelect}</span> 
        <br />
        <button id="new-quote" type="button" class="btn btn-primary m-5" onClick={() => setRerender(Math.random())}>New Quote</button>
        <br />
        <a href={tweetUrl} rel="noopener noreferrer" id="tweet-quote" className="text-secondary" target="_blank">Nice. Tweet it!</a>
        

      </div>
    </div>
  );
}

export default App;
