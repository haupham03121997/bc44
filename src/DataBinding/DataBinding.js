import React, { Component } from "react";

export default class DataBinding extends Component {
  // thuộc về class => đi kèm với "this"
  urlSrc =
    "https://m.media-amazon.com/images/M/MV5BNmI5YjA5MzUtYzY3NC00OGI3LWIxMWYtNDM0N2JhZDFkZjU2XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg";

  renderUserAge = () => {
    return <h1>Age : 2 </h1>;
  };
  render() {
    // thuộc function render => dùng từ khoá let
    let username = "Alice";

    return (
      <div>
        <h2>DataBinding</h2>
        <p>Username : {username}</p>
        <img src={this.urlSrc} alt="" />
        {this.renderUserAge()}
      </div>
    );
  }
}
