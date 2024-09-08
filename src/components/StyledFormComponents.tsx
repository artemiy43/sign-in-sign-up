import styled, { keyframes } from "styled-components";

const changeGradient = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 100%;
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg)
  }
`;

const bordertop = keyframes`
  0% {
    width: 0;
    height: 0;
    opacity: 0;
  }
  50% {
    width: 100%;
    height: 0;
    opacity: 1;
  }
  100% {
    width: 100%;
    height: 97%;
    opacity: 1;
  }
`;
const borderbottom = keyframes`
  0% {
    width: 0;
    height: 0;
    opacity: 0;
  }
  50% {
    width: 100%;
    height: 0;
    opacity: 1;
  }
  100% {
    width: 100%;
    height: 97%;
    opacity: 1;
  }
`;

export const SignForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 30px;
  margin: 0;
  box-sizing: border-box;
`;

export const SignInput = styled.input`
  width: 80%;
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 1);
  color: black;
  padding: 5px;
  font-size: 20px;
  line-height: 1.2;
  border-radius: 10px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 5px;
`;

export const ButtonSwitch = styled.button`
  position: relative;
  background: none;
  color: white;
  width: 200px;
  cursor: pointer;
  transition: 0.5s;
  border: none;
  padding: 10px;
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
    background: white;
    z-index: -1;
    transition: 0.5s;
  }

  &:hover {
    border: none;
    color: red;
  }

  &:hover::before {
    width: 100%;
  }
`;

export const Titlee = styled.h1`
  width: 80%;
  position: relative;
  align-content: center;
  align-self: center;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    border-top: 2px solid red;
    border-right: 2px solid red;
    animation: ${bordertop} 2s ease infinite alternate;
  }
  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-bottom: 2px solid red;
    border-left: 2px solid red;
    animation: ${borderbottom} 2s ease infinite alternate;
  }
`;

export const GradientButton = styled.button`
  width: 150px;
  height: 95px;
  border-radius: none;
  border: 1px wheat solid;
  color: white;
  background: linear-gradient(
    to bottom right,
    #917474 0%,
    #e45454 25%,
    #ff0000 50%,
    #740202 80%
  );
  background-size: 200% 200%;
  animation: ${changeGradient} 5s linear infinite alternate;
`;
