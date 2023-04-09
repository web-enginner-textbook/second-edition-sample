import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

class ClassComponentCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  // ②コンポーネントがDOMとして描画された後に実行
  componentDidMount() {
    this.counterID = setInterval(() => {
      this.countUp();
    }, 3000);
  }

  // ③コンポーネントのDOMが削除されるタイミングで実行
  componentWillUnmmount() {
    clearInterval(this.counterID);
  }

  // ④コンポーネントが更新された直後に実行
  componentDidUpdate() {
    console.log(`current counter: ${this.state.counter}`);
  }

  // ①インクリメント用
  countUp() {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

const FunctionalComponentCounter = () => {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef(); // ①setIntervalのIDを保持するためのrefを定義

  const countUp = () => {
    setCounter((stat) => stat + 1);
  };

  // ③マウント時に一度だけ実行
  useEffect(() => {
    intervalRef.current = setInterval(countUp, 3000);
    // ④クリーンアップ用の処理
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  // ②マウント時と更新時に実行
  useEffect(() => {
    console.log(`current counter: ${counter}`);
  });

  return (
    <div>
      <h1>Counter</h1>
      <p>{counter}</p>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ClassComponentCounter />);
