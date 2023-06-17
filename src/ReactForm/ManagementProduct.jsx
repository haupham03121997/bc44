import React, { Component } from "react";
import ProductList from "./ProductList";

export default class ManagementProduct extends Component {
  state = {
    values: {
      id: "",
      name: "",
      image: "",
      type: "Apple",
      price: 0,
      description: "",
    },
    errors: {
      id: "",
      name: "",
      image: "",
      price: "",
      description: "",
    },
    listProducts: [
      {
        id: "123ABC",
        name: "Iphone 14",
        image:
          "https://images.unsplash.com/photo-1603791239531-1dda55e194a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        type: "Apple",
        price: 27000000,
        description: "Mô tả sản phẩm",
      },
    ],
  };

  formValid = () => {
    // Chưa đúng format
    let inValid = false;
    Object.values(this.state.values).forEach((value) => {
      if (!value) {
        inValid = true;
      }
    });
    return inValid;
  };

  handleOnchange = (event) => {
    const { name, value, pattern, id } = event.target;
    // name="id" , name = "name"
    // {id : 1 , name : 2} => {id : 3 , name : 2}

    // values = {id : 1 , name : 2}
    // newValues = {...values ,id: "12312"} => { name : 2 ,id: "12312"}
    const newValue = { ...this.state.values, [name]: value };
    const newError = { ...this.state.errors };
    // Xử lý lỗi
    // falsy : "" , 0 , null , undefined, false , -0 , NAN
    if (!value.trim()) {
      // Không có giá trị, hàm trim()
      newError[name] = "Trường này không được để trống!";
    } else {
      // Xử lý validation khi nhập không đúng định dạng
      if (pattern) {
        const regex = new RegExp(pattern);
        const inValid = regex.test(value);
        if (!inValid) {
          newError[name] = "Id không đúng định dạng!";
        } else {
          newError[name] = "";
        }
      }
    }

    this.setState({ values: newValue, errors: newError });
  };

  handleOnBlur = (event) => {
    const { name, value } = event.target;
    // name="id" , name = "name"
    // {id : 1 , name : 2} => {id : 3 , name : 2}
    console.log(event.target);
    // values = {id : 1 , name : 2}
    // newValues = {...values ,id: "12312"} => { name : 2 ,id: "12312"}
    const newValue = { ...this.state.values, [name]: value };
    const newError = { ...this.state.errors };
    // Xử lý lỗi
    if (!value.trim()) {
      // Không có giá trị
      newError[name] = "Trường này không được để trống!";
    } else {
      newError[name] = "";
    }
    this.setState({ values: newValue, errors: newError });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // thêm 1 sản phẩm vào list products

    // Xử lý validation form
    console.log(this.formValid());
    if (!this.formValid()) {
      // copy ra 1 list mới và thêm vào 1 sản phẩm: this.state.values
      const newProducts = [...this.state.listProducts, this.state.values];
      this.setState({ listProducts: newProducts });
    }
  };

  render() {
    // let { id, name, image, type, price, description, listProducts } =
    //   this.state;
    // values , errors , listProducts
    let { values, errors, listProducts } = this.state;

    // Bốc tách từ values
    let { id, name, image, type, price, description } = values;

    return (
      <div className="container">
        <h3 className="text-center">Quản Lý Sản Phẩm</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-6 mb-4">
              <label htmlFor="">ID</label>
              <input
                value={id}
                type="text"
                id="id"
                name="id"
                className="form-control"
                pattern="^[0-9a-zA-Z]{1,5}$"
                onChange={this.handleOnchange}
                onBlur={this.handleOnBlur}
              />
              {errors.id && (
                <span className="text text-danger">{errors.id}</span>
              )}
            </div>
            <div className="col-6  mb-4">
              <label htmlFor="">Image</label>
              <input
                value={image}
                type="text"
                id="image"
                name="image"
                className="form-control"
                onChange={this.handleOnchange}
                onBlur={this.handleOnBlur}
              />
              {errors.image && (
                <span className="text text-danger">{errors.image}</span>
              )}
            </div>
            <div className="col-6  mb-4">
              <label htmlFor="">Name</label>
              <input
                value={name}
                type="text"
                id="name"
                name="name"
                className="form-control"
                onChange={this.handleOnchange}
                onBlur={this.handleOnBlur}
              />
              {errors.name && (
                <span className="text text-danger">{errors.name}</span>
              )}
            </div>
            <div className="col-6  mb-4">
              <label htmlFor="">Product Type</label>
              <select
                value={type}
                id="type"
                name="type"
                className="form-control"
                onChange={this.handleOnchange}
              >
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
              </select>
            </div>
            <div className="col-6  mb-4">
              <label htmlFor="">Price</label>
              <input
                value={price}
                type="text"
                id="price"
                name="price"
                className="form-control"
                onChange={this.handleOnchange}
                onBlur={this.handleOnBlur}
              />
              {errors.price && (
                <span className="text text-danger">{errors.price}</span>
              )}
            </div>
            <div className="col-6  mb-4">
              <label htmlFor="">Description</label>
              <input
                value={description}
                type="text"
                id="description"
                name="description"
                className="form-control"
                onChange={this.handleOnchange}
                onBlur={this.handleOnBlur}
              />
              {errors.description && (
                <span className="text text-danger">{errors.description}</span>
              )}
            </div>
            <div className="col-12">
              <button className="btn btn-success mr-3">Add </button>
              <button className="btn btn-warning">Edit </button>
            </div>
          </div>
        </form>
        <ProductList data={listProducts} />
      </div>
    );
  }
}
