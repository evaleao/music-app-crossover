import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contentData from "../utils/contentData";

class Content extends Component {
  render() {
    return (
      <div className="text-center hero my-5">
      <div className="mt-3 p-5 bg-dark text-white rounded">
    <h1>Welcome to our Music App</h1>
    <p className="pt-4">Here you can check out the hottest playlists on the internet</p>
  </div>
    </div>
    );
  }
}

export default Content;
