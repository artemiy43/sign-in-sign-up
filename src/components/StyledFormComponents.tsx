import styled from "styled-components";

export const SignForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
  padding: 30px;
  margin: 0;
  box-sizing: border-box;
`;

export const SignInput = styled.input`
  width: 80%;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.774);
  color: black;
  padding: 5px;
  font-size: 20px;
  line-height: 1.2;
  border-radius: 10px;
`;

export const ButtonSwitch = styled.button<{ sign: string }>`
  position: relative;
  background: none;
  color: ${(props) => (props.sign === "up" ? "white" : "red")};
  width: 200px;
  cursor: pointer;
  transition: 0.5s;
  border: none;
  padding: 15px;
  box-sizing: border-box;
  z-index: 0;
  border-radius: 10px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0%;
    background: ${(props) => (props.sign === "up" ? "white" : "red")};
    border-radius: 10px;
    z-index: -1;
    transition: 0.5s;
  }

  &:hover {
    border: none;
    color: ${(props) => (props.sign === "up" ? "red" : "white")};
  }

  &:hover::before {
    width: 100%;
  }
`;

export const ButtonSubmit = styled.button<{ sign: string }>`
  position: relative;
  background: none;
  color: ${(props) => (props.sign === "up" ? "red" : "white")};
  width: 200px;
  cursor: pointer;
  transition: 0.5s;
  border: none;
  padding: 15px;
  box-sizing: border-box;
  z-index: 0;
  border-radius: 10px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0%;
    background: ${(props) => (props.sign === "up" ? "red" : "white")};
    border-radius: 10px;
    z-index: -1;
    transition: 0.5s;
  }

  &:hover {
    border: none;
    color: ${(props) => (props.sign === "up" ? "white" : "red")};
  }

  &:hover::before {
    width: 100%;
  }
`;
