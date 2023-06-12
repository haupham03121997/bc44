import React, { Component } from "react";
import Child from "./Child";
import axios from "axios";

export default class DemoLifeCycle extends Component {
  // constructor sẽ chạy trước tất cả mọi thứ và dùng để khai báp state và những giá trị khác
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello cyber",
      userLogin: null,
      number: 1,
      isLiked: false,
      isShow: true,
      listProduct: [],
    };
    console.log("constructor");
  }

  // Trước version 16.4
  // Method componentWillMount: Chạy trước render, nó bị thay thể bởi getDerivedStateFromProps từ 16.4 trở đi
  //   componentWillMount() {
  //     console.log("componentWillMount");
  //   }
  // Method getDeriveStateFromProps sẽ chạy trước render, mặc định phải có return: null hoặc là {key : value}
  // props : nhận props từ component cha
  // state : lấy state từ component
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps", props, state);
    return {
      ...state,
      message: "HEHE",
    };
  }

  // Method shouldComponentUpdate: chạy sau getDeriveStateFromProps và trước render() và mặc định sẽ return về true: true ? render : không render
  shouldComponentUpdate() {
    return true;
  }

  //   getSnapshotBeforeUpdate() {
  //     console.log("getSnapshotBeforeUpdate");
  //     return null;
  //   }

  // Method getSnapshotBeforeUpdate chạy sau render và trước componentDidUpdate, lưu ý nó sẽ báo lỗi khi không khai báo componentDidUpdate
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return { message: "snapshot value" };
  }
  // Chạy trong giai đoạn updating, và không nên setState trong này - Dùng để call api phụ thuộc cái url
  componentDidUpdate(nextProps, nextState, snapshot) {
    let getParamUrl = window.location.search;
    let searchParam = new URLSearchParams(getParamUrl);
    let id = searchParam.get("id");
    if (id) {
      //call api detail
    }
    console.log("componentDidUpdate", snapshot);
    // this.setState({ number: this.state.number + 1 });
  }
  render() {
    console.log("render", this.state.listProduct);
    const { number, isLiked, isShow, listProduct } = this.state || {};
    return (
      <div className="container">
        DemoLifeCycle
        <h3>List Product</h3>
        <div className="row">
          {listProduct.map((item) => {
            return (
              <div className="col-4 mb-3" key={item.id}>
                <div className="card">
                  <img src={item.image} alt={item.name} />
                  <div className="card-body">
                    <div className="card-title">{item.name}</div>
                    <div>
                      <button className="btn btn-primary">View Detail</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <p>{number}</p>
        <button
          className="btn btn-success"
          onClick={() => this.setState({ number: number + 1 })}
        >
          Increase number
        </button>
        <div id="tbody"></div>
        <button onClick={() => this.setState({ isLiked: !isLiked })}>
          Like
        </button>
        <button
          className="btn btn-primary"
          onClick={() => this.setState({ isShow: !isShow })}
        >
          Show/Hidden Child
        </button>
        {isShow ? <Child number={number} /> : null} */}
      </div>
    );
  }

  // Tao hàm lấy sản phẩm
  getProductListApi() {
    axios
      .get("https://shop.cyberlearn.vn/api/Product")
      .then((result) => {
        // console.log("data", result);
        this.setState({ listProduct: result.data.content });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.getProductListApi();
    // call api => data =>setState=>
    // document.getElementById("content").innerHTML = "12312";
    console.log("componentDidMount");
  }
}
