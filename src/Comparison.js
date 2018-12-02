import React, {Component} from 'react'

export default class Comparison extends Component {

    render() {
        return (
            <li>
                <h4>{this.props.title}</h4>
                <p>Min: {this.props.minimum}</p>
                <p>Max: {this.props.maximum}</p>
                {/* <button className='close' onClick={(this.props.index) => this.props.clear(this.props.index)}>x</button> */}
            </li>
        )
    }
}
