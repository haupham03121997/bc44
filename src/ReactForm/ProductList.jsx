import React, { Component } from "react";

export default class ProductList extends Component {
  // Nhận props là data từ component cha là 1 mảng: data[]
  render() {
    // table bootstrap4
    const { data } = this.props;
    return (
      <div className="mt-4">
        <h3>Product List</h3>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Type</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <th>{item.id}</th>
                  <td>{item.name}</td>
                  <td>
                    <img
                      width={80}
                      height={80}
                      style={{ objectFit: "cover" }}
                      src={item.image}
                      alt={item.name}
                    />
                  </td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>
                    <button className="btn btn-warning mr-3">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
