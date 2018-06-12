import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

class App extends Component {
  constructor(){
    super()

    this.state = {
      captions: [
        "Single Orcs in Indianapolis", 
        "You won't believe what's under this mountain",
        "Mine 20% more gold with One Weird Trick", 
        "Surprise for Indiana Hobbits born before 1999"
      ],
      articles: [
        '#',
        '#',
        '#',
        '#',
      ],
      imgSrcs: [
        "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif",
        "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg",
        "http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg",
        "http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg",
      ],
      imgAlts: [
        'orc',
        'mountain',
        'gold',
        'hobbit',
      ],
    }

  }

  render() {
    return ( 
      <div className="App">

        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;