//import styled from "styled-components";
import {
  SignForm,
  SignInput,
  ButtonSubmit,
  GradientButton,
} from "./StyledFormComponents";

export default function FormStyled({ sign }) {
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
  };
  return (
    <SignForm onSubmit={handleSubmit}>
      <label>Email</label>
      <SignInput type="text" />
      <label>Password</label>
      <SignInput type="password" />
      <ButtonSubmit sign={sign} type="submit">
        fdfds
      </ButtonSubmit>
      <GradientButton>Hello!</GradientButton>
    </SignForm>
  );
}
