import React, {Component} from 'react'

class ClickbaitContent extends Component {
    render() {
        return(
          <div>
            <a href={this.props.links}>
                <img src={this.props.srcs} alt={this.props.alts} />
                <p>{this.props.name}}</p>
            </a> 
          </div>
        );
    }
}

export default ClickbaitContent


