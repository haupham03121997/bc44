import React, { Component } from "react";

export default class DetailMovie extends Component {
  render() {
    let { detail } = this.props;
    return (
      <div className="col-4 pt-5">
        <h3>{JSON.stringify(detail)}</h3>
      </div>
    );
  }
}
/**
 * {
  "maPhim,": 1284,
  "tenPhim,": "Inside Out",
  "biDanh,": "inside-out",
  "trailer,": "https://www.youtube.com/embed/seMwpP0yeu4",
  "hinhAnh,": "https://movienew.cybersoft.edu.vn/hinhanh/insideout.jpg",
  "moTa,": "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
  "maNhom,": "GP00",
  "ngayKhoiChieu,": "2019-07-29T00:00:00",
  "danhGia,": 5
}
 */
