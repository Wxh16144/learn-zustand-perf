import React from "react";
import Left from "./Left";
import Right from "./Right";
import { Divider } from "antd";

const App = () => {
  const slogan = `魔法师正在进行最后的仪式，为您带来一项惊艳功能`;

  return (
    <>
      <h1>{slogan}</h1>
      <hr />
      <div style={{ display: "flex" }}>
        <Left />
        <Divider type="vertical" />
        <Right />
      </div>
    </>
  );
}

export default App;
