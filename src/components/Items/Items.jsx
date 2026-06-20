import React, { Component } from "react";
import Item from "./Item";
import styles from "./Items.module.css";

export class Items extends Component {
  render() {
    return (
      <main className={styles.main}>
        {this.props.items.map((el) => (
          <Item key={el.id} item={el} />
        ))}
      </main>
    );
  }
}

export default Items;
