import { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import "./Sign.css";
function Sign() {
  const [sign, setSign] = useState<string>("up");
  // const signRef = useRef(null);
  function change() {
    if (sign === "up") setSign("in");
    else setSign("up");
  }

  const Main = styled.div`
    position: relative;
    width: 900px;
    height: 550px;
    border-radius: 15px;
    border: 1px black solid;
    box-shadow: 15px 15px 15px 0 rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: row;
    min-width: 320px;
  `;

  const TitleContainer = styled.div<{ sign: string }>`
    position: absolute;
    top: 0;
    /* left: 0; */
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: ${(props) => (props.sign === "up" ? "red" : "white")};
    color: ${(props) => (props.sign === "up" ? "white" : "red")};
    transition: all 2s linear;
  `;

  const Sign = styled.div<{ sign: string }>`
    position: absolute;
    top: 0;
    /* left: 50%; */
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: ${(props) => (props.sign === "up" ? "white" : "red")};
    color: ${(props) => (props.sign === "up" ? "red" : "white")};
    transition: all 2s linear;
  `;

  const H1 = styled.h1<{ sign: string }>`
    /* color: ${(props) => (props.sign === "up" ? "w" : "white")}; */
  `;

  const ButtonSwitch = styled.button<{ sign: string }>`
    background: ${(props) => (props.sign === "up" ? "red" : "white")};
    color: ${(props) => (props.sign === "up" ? "white" : "red")};
    width: 200px;
  `;
  return (
    <Main>
      <TitleContainer
        sign={sign}
        // ref={signRef}
        className={`${sign === "up" ? "toLeft" : "toRight"}`}
      >
        <H1 sign={sign}>
          {sign === "up" ? "Добро пожаловать!" : "Рады вас снова видеть!"}
        </H1>
        <ButtonSwitch sign={sign} onClick={change}>
          {sign === "up" ? "Зарегистрироваться" : "Войти"}
        </ButtonSwitch>
      </TitleContainer>
      <Sign sign={sign} className={`${sign === "up" ? "toRight" : "toLeft"}`}>
        sfsdfsdsf
      </Sign>
    </Main>
  );
}

export default Sign;
