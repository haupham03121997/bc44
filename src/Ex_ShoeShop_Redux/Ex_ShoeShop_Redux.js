import React, { Component } from "react";
import { shoeArr } from "./data";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";
import CartShoe from "./CartShoe";

export default class Ex_ShoeShop_Redux extends Component {
  state = {
    shoeArr: shoeArr,
    detailShoe: shoeArr[0],
    cart: [],
  };

  handleAddToCart = (shoe) => {
    let cloneCart = [...this.state.cart];

    let index = cloneCart.findIndex((item) => item.id == shoe.id);
    if (index == -1) {
      // chưa có
      // copy shoe vào newShoe và thêm key soLuong
      let newShoe = { ...shoe, soLuong: 1 };
      cloneCart.push(newShoe);
    } else {
      // đã có => tăng soLuong lên 1 đơn vị
      cloneCart[index].soLuong = cloneCart[index].soLuong + 1;
    }

    // th1: sp chưa có trong giỏ hàng => push

    // th2: sp đã có trong giỏ hàng => ko push

    // cloneCart.push(shoe);
    this.setState({ cart: cloneCart });
  };
  handleDelete = (idShoe) => {
    let cloneCart = this.state.cart.filter((item) => item.id !== idShoe);
    // splice
    this.setState({ cart: cloneCart });
  };
  handlxeChangeAmount = (idShoe, option) => {
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => item.id == idShoe);
    cloneCart[index].soLuong = cloneCart[index].soLuong + option;
    // soLuong có thể là +1 hoặc -1

    if (cloneCart[index].soLuong == 0) {
      // sau khi update soLuong, nếu bằng 0 thì xoá
      cloneCart.splice(index, 1);
    }
    this.setState({ cart: cloneCart });
  };
  render() {
    return (
      <div>
        <div className="row">
          <CartShoe
          // handleChangeAmount={this.handleChangeAmount}
          // handleRemove={this.handleDelete}
          // cart={this.state.cart}
          />
          <ListShoe />
        </div>

        <DetailShoe />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
