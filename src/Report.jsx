import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Common from "./common";
const BASE_URL = Common.API_URL;
export default class report extends Component {
  render() {
    return (
      <>
        <div style={{ paddingTop: "15px" }}>
          1. อานนท์ พรมมูล 65230035 <br></br>
          2. วัยวุฒิ ชุมเมืองปัก 65230087 <br></br>
          3. กมลรัชต์ สงวนหมู่ 65130460 <br></br>
          4. ศุภกรณ์ คล้ายเฉลิม 65230099
        </div>
      </>
    );
  }
}
