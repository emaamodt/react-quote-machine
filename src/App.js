import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentQuote: '',
      quotes: ["\"All year long they looked to him (Kirk Gibson) to light the fire and all year long he answered the demands. High fly ball into right field. She is gone! [pause] In a year that has been so improbable, the impossible has happened.\"", "\"Andre Dawson has a bruised knee and is listed as day-to-day (pause). Aren't we all?\"", "\"As long as you live keep smiling because it brightens everybody's day.\"","\"It's easier to pick off a fast runner than to pick off a lazy runner.\"","\"Good is not good when better is expected.\"","\"He (Bob Gibson) pitches as though he's double-parked.\"","\"He's (Tom Glavine) like a tailor; a little off here, a little off there and you're done, take a seat.\"","\"How good was Stan Musial? He was good enough to take your breath away.\"","\"I really love baseball. The guys and the game, and I love the challenge of describing things. The only thing I hate — and I know you have to be realistic and pay the bills in this life — is the loneliness on the road.\"","\"It's a mere moment in a man's life between the All-Star Game and an old timer's game.\"","\"I would come home to listen to a football game — there weren't other sports on — and I would get a pillow and I would crawl under the radio, so that the loudspeaker and the roar of the crowd would wash all over me, and I would just get goose bumps like you can't believe. And I knew that of all the things in this world that I wanted, I wanted to be that fella saying, whatever, home run, or touchdown. It just really got to me.\"","\"Losing feels worse than winning feels good.\"","\"Statistics are used much like a drunk uses a lamp post: for support, not illumination.\""]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    do {
      var randomQuote = this.state.quotes[Math.floor(Math.random()*this.state.quotes.length-1)];
    }
    while (this.state.currentQuote === randomQuote);
    
    this.setState({
      currentQuote: randomQuote
    })
  }

  render() {
    return (
      <div>
        <h1>Vin Scully Quotes</h1>
        <p>Random quotes from the best announcer in baseball history.</p>
        <h3>{this.state.currentQuote}</h3>
        <button id="getQuote" onClick={this.handleClick}>Quote</button>
        <a href={"https://twitter.com/home/?status=?" + this.state.currentQuote}><button id="tweet">Tweet</button></a>
      </div>
    );
  }
}

export default App;
