import React, { Component } from "react";
import styles from "./Item.module.css";

export class Item extends Component {
  render() {
    return (
      <div className={styles.item}>
        <div className={styles.imageContainer}>
          <img src={"/img/" + this.props.item.img} alt={this.props.item.title} />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{this.props.item.title}</h2>
          <p className={styles.desc}>{this.props.item.desc}</p>
          <div className={styles.priceContainer}>
            <b className={styles.price}>{this.props.item.price} руб</b>
            <div className={styles.addToCard}>+</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
