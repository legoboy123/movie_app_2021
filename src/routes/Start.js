import React from "react";
import Ninjas from "../components/ninjas";

class Start extends React.Component {
  state = {
    isCheck: false,
    NinjaA: false,
    NinjaB: false,
    NinjaC: false,
    ninjaA_Data: [
      {
        name: "당신은 개찐따같은 보통 닌자",
        id: 1,
        image:
          "data:image/jpeg;base64,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",
      },
    ],
    ninjaB_Data: [
      {
        name: "당신은 군침이 싹 메마르는 건조 닌자",
        id: 2,
        image:
          "data:image/jpeg;base64,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",
      },
    ],
    ninjaC_Data: [
      {
        name: "당신은 닌자 중의 닌자, 최고의 닌자, 킹왕짱 닌자",
        id: 3,
        image:
          "https://t1.daumcdn.net/liveboard/hero_nitko/8a4dcdc96e694a2b829c456706779b32.JPG",
      },
    ],
  };
  NinjaA = () => {
    this.setState({
      NinjaA: true,
      NinjaB: false,
      NinjaC: false,
      isCheck: true,
    });
    console.log(this.state);
  };
  NinjaB = () => {
    this.setState({
      NinjaA: false,
      NinjaB: true,
      NinjaC: false,
      isCheck: true,
    });
    console.log(this.state);
  };
  NinjaC = () => {
    this.setState({
      NinjaA: false,
      NinjaB: false,
      NinjaC: true,
      isCheck: true,
    });
    console.log(this.state);
  };

  render() {
    const {
      NinjaA,
      NinjaB,
      NinjaC,
      ninjaA_Data,
      ninjaB_Data,
      ninjaC_Data,
      isCheck,
    } = this.state;
    return (
      <div>
        <h1>빈칸에 들어갈 말을 고르시오</h1>
        <h3>
          나는 닌자다... 오늘도 나는 타겟을 암살하기 위해 타겟의 집에 몰래
          잠입했다.
        </h3>
        <h3>타겟의 방에 잠입성공..</h3>
        <h3>곤히 자고 있는 녀석의 목을 베려는 바로 그 순간!</h3>
        <h2>"야 이 새끼야 너 누구야!!!!!!!!!!"</h2>
        <h3>너무 놀란 나는 뒤를 돌아보았는데...!</h3>
        <h3>나를 바라보고 있던 그 놈은 바로바로..!</h3>
        <h1>[ ]!!!</h1>
        <button onClick={this.NinjaA}>타겟의 보디가드 닌자</button>
        <button onClick={this.NinjaB}>군침이 싹 도는 닌자루피</button>
        <button onClick={this.NinjaC}>
          방금 갓 데워진 따끈따끈한 햇반닌자
        </button>

        {isCheck ? (
          <div>
            <div>
              {NinjaA ? (
                <div>
                  {ninjaA_Data.map((ninja) => (
                    <Ninjas
                      name={ninja.name}
                      id={ninja.id}
                      key={ninja.id}
                      image={ninja.image}
                    />
                  ))}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div>
              {NinjaB ? (
                <div>
                  {ninjaB_Data.map((ninja) => (
                    <Ninjas
                      name={ninja.name}
                      id={ninja.id}
                      key={ninja.id}
                      image={ninja.image}
                    />
                  ))}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div>
              {NinjaC ? (
                <div>
                  {ninjaC_Data.map((ninja) => (
                    <Ninjas
                      name={ninja.name}
                      id={ninja.id}
                      key={ninja.id}
                      image={ninja.image}
                    />
                  ))}
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        ) : (
          <div>
            <h1></h1>
          </div>
        )}
      </div>
    );
  }
}
export default Start;
