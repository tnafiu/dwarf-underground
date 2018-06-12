import React, {Component} from 'react'

import ClickbaitContent from './ClickbaitContent'

class Clickbait extends Component {
    render() {
        return (
          <div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>
            <div className="small-6 medium-3 columns other-article">
                {this.state.captions.map(caption => <ClickbaitContent name={caption}/>)}
                {this.state.articles.map(article => <ClickbaitContent links={article}/>)}
                {this.state.imgSrcs.map(imgSrc => <ClickbaitContent srcs={imgSrc}/>)}
                {this.state.imgAlts.map(imgAlt => <ClickbaitContent alts={imgAlt}/>)}
            </div>
          </div>
        );
    }
}

export default Clickbait

           
