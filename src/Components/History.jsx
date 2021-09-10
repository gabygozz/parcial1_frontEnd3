import { Component } from 'react'

class History extends Component {

    state = {
        history: []
    }

    static getDerivedStateFromProps(props, state) {

        if (props.prevSelection !== "") {
            return {
                history: [...state.history, props.prevSelection]
            }
        } else {
            return null;
        }
    }

    render() {
        const prevSelection = this.props.prevSelection;

        return (
            <>
                <h3>Selección anterior: {prevSelection.toUpperCase()}</h3>
                <h4>Historial de opciones elegidas:</h4>
                <ul>
                    {this.state.history.slice(0, -1).map((element, index) => <li key={index}>{element.toUpperCase()}</li>)}
                </ul>
            </>
        )
    }
}

export default History;