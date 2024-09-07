//import styled from "styled-components";
import { SignForm, SignInput, ButtonSubmit } from "./StyledFormComponents";

export default function FormStyled({ sign }) {
  return (
    <SignForm>
      <label>Email</label>
      <SignInput type="text" />
      <label>Password</label>
      <SignInput type="password" />
      <ButtonSubmit sign={sign}>fdfds</ButtonSubmit>
    </SignForm>
  );
}
