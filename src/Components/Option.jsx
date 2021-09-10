import { Component } from 'react';

class Option extends Component {

    render() {
       
        return (
            <div className="opcion">
                <button className="botones" id={this.props.id} onClick={this.props.onSelect}>
                    {this.props.id.toUpperCase()}
                </button>
                <h2>{this.props.description}</h2>
            </div>
        )
    }
}

export default Option;