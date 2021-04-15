import React from "react";
import { Link } from "react-router-dom";

class RealStart extends React.Component {
  render() {
    return (
      <div>
        <h1>닌자 테스트</h1>
        <Link to="/start">Let's GO!</Link>
      </div>
    );
  }
}

export default RealStart;
