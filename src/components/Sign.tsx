import { useState } from "react";
import styled from "styled-components";
import "./Sign.css";
import { ButtonSwitch } from "./StyledFormComponents";
import FormStyled from "./StyledForm";
function Sign() {
  const [sign, setSign] = useState<string>("");
  // const signRef = useRef(null);

  function change() {
    if (sign === "") setSign("in");
    else if (sign === "up") setSign("in");
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
    transition: all 1.5s linear;
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
    transition: all 1.5s linear;
  `;

  return (
    <Main>
      <TitleContainer
        sign={sign}
        className={`${sign === "" ? "" : sign === "up" ? "toLeft" : "toRight"}`}
      >
        <h1>
          {sign === "up" || sign === ""
            ? "Добро пожаловать!"
            : "Рады снова вас видеть!"}
        </h1>
        <ButtonSwitch sign={sign} onClick={change}>
          {sign === "up" || sign === "" ? "Зарегистрироваться" : "Войти"}
        </ButtonSwitch>
      </TitleContainer>
      <Sign
        sign={sign}
        className={`${
          sign === "" ? "based" : sign === "up" ? "toRight" : "toLeft"
        }`}
      >
        <FormStyled sign={sign} />
      </Sign>
    </Main>
  );
}

export default Sign;
