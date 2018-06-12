import React, {Component} from 'react'

import Orc from './Orc';
import Mountain from './Mountain';
import Gold from './Gold';
import Hobbit from './Hobbit';

class Clickbait extends Component {
    constructor(props){
        super(props)
        const objArray = []
        objArray.push(<Orc/>)
        objArray.push(<Mountain/>)
        objArray.push(<Gold/>)
        objArray.push(<Hobbit/>)

        this.state = {objArray}
      }

    render() {
        return (
          <div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>
               {this.state.objArray.map((obj, index) => (
                  <div key={index}>
                    {obj}
                  </div>
               ))}
            </div>
        );
    }
}

export default Clickbait

           
