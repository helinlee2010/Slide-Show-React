import React, { Component } from "react";
import "./App.scss";
import data from "./data";
import Card from "./Card";

class App extends Component {
  state = {
    properties: data.properties,
    property: data.properties[0]
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     properties: data.properties,
  //     property: data.properties[0]
  //   };
  // }

  previousCard = () => {
    const currentIndex = this.state.property.index;
    this.setState({ property: data.properties[currentIndex - 1] });
    console.log(this.state);
  };

  nextCard = () => {
    const currentIndex = this.state.property.index;
    this.setState({ property: data.properties[currentIndex + 1] });
    console.log(this.state);
  };

  // wrapperStyle = {
  //   transform: `translateX(-${this.state.property.index *
  //     (100 / this.state.properties.length)}%)`
  // };    //不能单独放出来 这个不会在rerender时更新？

  render() {
    const { properties, property } = this.state;
    // Note property= active/focused card

    //console.log(this.state);

    return (
      <div className="App">
        <h2>Slide Show React</h2>
        <button
          onClick={() => this.previousCard()}
          disabled={property.index === 0}
        >
          Previous
        </button>
        <button
          onClick={() => this.nextCard()}
          disabled={property.index === properties.length - 1}
        >
          Next
        </button>
        <div className={`cards-slider active-slide-${property.index}`}>
          <div
            className="cards-slider-wrapper"
            style={{
              transform: `translateX(-${property.index *
                (100 / properties.length)}%)`
            }}
          >
            {properties.map(property => (
              <Card key={property._id} property={property} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
