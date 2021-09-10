import { Component } from "react";
import History from "./History.jsx";
import Option from "./Option.jsx";
import data from "./data.json";

class Main extends Component {

  state = {
    count: 1,
    prevSelection: "",
    newId: "1"
  }

  handleSelect = event => {
    if (this.state.count > 4) {
      alert("FIN");
    }

    else {
      this.setState(prevState => ({
        count: prevState.count + 1,
        prevSelection: event.target.id,
        newId: prevState.count + 1 + event.target.id
      }))
    }
  }

  render() {

    const info = data.find(element => element.id === this.state.newId);

    return (
      <div className="layout">
        <h1 className="historia">{info.historia}</h1>

        <div className="opciones">
          <Option id="a" description={info.opciones.a} onSelect={this.handleSelect} />
          <Option id="b" description={info.opciones.b} onSelect={this.handleSelect} />
        </div>

        <div className="recordatorio">
          <History prevSelection={this.state.prevSelection} />
        </div>
        
      </div>
    )
  }
}

export default Main;