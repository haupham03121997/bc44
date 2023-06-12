import React, { Component } from "react";
import { shoeArr } from "./data";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";
import CartShoe from "./CartShoe";

export default class Ex_ShoeShop_Redux extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <CartShoe />
          <ListShoe />
        </div>
        <DetailShoe />
      </div>
    );
  }

  renderJSX() {
    return <div>12312</div>;
  }
}
