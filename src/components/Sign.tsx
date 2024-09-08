import { useState } from "react";
import styled from "styled-components";
import "./Sign.css";
import { Titlee } from "./StyledFormComponents";
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

  const TitleContainer = styled.div`
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
    background: white;
    color: red;
    transition: all 1.5s linear;
  `;

  const Sign = styled.div`
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
    background: red;
    color: white;
    transition: all 1.5s linear;
  `;

  return (
    <Main>
      <TitleContainer
        sign={sign}
        className={`${sign === "" ? "" : sign === "up" ? "toLeft" : "toRight"}`}
      >
        <Titlee sign={sign}>
          {sign === "up" || sign === ""
            ? "Добро пожаловать!"
            : "Рады снова вас видеть!"}
        </Titlee>
      </TitleContainer>
      <Sign
        sign={sign}
        className={`${
          sign === "" ? "based" : sign === "up" ? "toRight" : "toLeft"
        }`}
      >
        <FormStyled sign={sign} change={change} />
      </Sign>
    </Main>
  );
}

export default Sign;
