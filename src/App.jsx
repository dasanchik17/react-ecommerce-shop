import React from "react";
import products from "./mocks/products";
import Header from "./components/Header/Header";
import Items from "./components/Items/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: products,
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Header></Header>
        <Items items={this.state.items}></Items>
      </div>
    );
  }
}
export default App;
