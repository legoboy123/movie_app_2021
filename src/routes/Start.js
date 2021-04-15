import React from "react";
import Ninjas from "../components/ninjas";

class Start extends React.Component {
  state = {
    isCheck: false,
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
  trueNinja = () => {
    this.setState({ isNinja: true, isCheck: true });
  };
  falseNinja = () => {
    this.setState({ isNinja: false, isCheck: true });
  };
  render() {
    const { ninjasData, isNinja, isCheck } = this.state;
    return (
      <div>
        <h1>당신은 닌자입니까?</h1>
        <button onClick={this.trueNinja}>Yes</button>
        <button onClick={this.falseNinja}>No</button>
        {isCheck ? (
          <div>
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
          </div>
        ) : (
          <div>
            <h1>과연 결과는...????</h1>
          </div>
        )}
      </div>
    );
  }
}
export default Start;
