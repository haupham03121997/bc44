import React, { Component } from "react";
import moment from "moment";
export default class ItemMovie extends Component {
  convertMovieName = (title) => {
    if (title.length > 10) {
      return title.slice(0, 10) + "...";
    }
    return title;
  };
  render() {
    //  moment js npm
    let { handleChangeDetail, movie } = this.props;
    let { tenPhim, hinhAnh, ngayKhoiChieu } = movie;
    return (
      <div className="card text-left col-3 ">
        <img style={{ height: 200 }} className="card-img-top " src={hinhAnh} />
        <div className="card-body">
          <h4 className="card-title">{this.convertMovieName(tenPhim)}</h4>
          <p className="card-text">
            {moment(ngayKhoiChieu).format("DD-MM-YYYY")}
          </p>
          <button
            onClick={() => {
              handleChangeDetail(movie);
            }}
            className="btn btn-danger"
          >
            Xem{" "}
          </button>
        </div>
      </div>
    );
  }
}
/**
 * {
  "maPhim": 1284,
  "tenPhim": "Inside Out",
  "biDanh": "inside-out",
  "trailer": "https://www.youtube.com/embed/seMwpP0yeu4",
  "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/insideout.jpg",
  "moTa": "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
  "maNhom": "GP00",
  "ngayKhoiChieu": "2019-07-29T00:00:00",
  "danhGia": 5
}
 */
