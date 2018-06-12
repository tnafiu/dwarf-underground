import React, {Component} from 'react'

import Ad from './Ad'
import Comment from './Comment'
import Share from './Share'
import Clickbait from './Clickbait'
import Article from './Article'

class Main extends Component {
    render() {
        return(
          <main className="expanded row">
            <div className="large-8 medium-12 columns article">
             <Article/>
              <div className="article-links">
                <Comment/>
                <Share/>
              </div>
            </div>
            <Ad/>
            <Clickbait/>
          </main>
        );
    }
}

export default Main