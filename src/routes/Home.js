import React from "react";
import Ninjas from "../components/ninjas";
import "./Home.css";

class Home extends React.Component {
  state = {
    isNinja: false,
    ninjasData: [
      {
        name: "A ninja",
        id: 1,
      },
      {
        name: "B ninja",
        id: 2,
      },
      {
        name: "C ninja",
        id: 3,
      },
    ],
  };

  render() {
    const { ninjasData, isNinja } = this.state;
    return (
      <div>
        {isNinja ? (
          <div>
            <h1>너는 닌자</h1>
            {ninjasData.map((ninja) => (
              <Ninjas name={ninja.name} id={ninja.id} key={ninja.id} />
            ))}
          </div>
        ) : (
          <div>
            <h1>넌 닌자가 아니다</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
