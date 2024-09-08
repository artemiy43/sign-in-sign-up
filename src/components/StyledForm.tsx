//import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignForm, SignInput, InputContainer } from "./StyledFormComponents";

import { ButtonSwitch } from "./StyledFormComponents";

type Inputs = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
};

interface dataProps {
  sign: string;
  change: () => void;
}

export default function FormStyled({ sign, change }: dataProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <SignForm onSubmit={handleSubmit(onSubmit)}>
      {sign === "up" || sign === "" ? (
        <>
          <InputContainer>
            <label>Имя</label>
            <SignInput
              type="text"
              {...(register("firstName"), { required: true, maxLength: 20 })}
            />
            {errors.firstName && <span>This field is required</span>}
          </InputContainer>
          <InputContainer>
            <label>Фамилия</label>
            <SignInput
              type="text"
              {...(register("lastName"), { required: true, maxLength: 20 })}
            />
            {errors.lastName && <span>This field is required</span>}
          </InputContainer>
          <InputContainer>
            <label>Номер телефона</label>
            <SignInput
              type="number"
              {...(register("phone"), { required: true })}
            />
            {errors.phone && <span>This field is required</span>}
          </InputContainer>
        </>
      ) : (
        <></>
      )}
      <InputContainer>
        {" "}
        <label>Эл. почта</label>
        <SignInput type="email" {...register("email")} />
        {errors.email && <span>This field is required</span>}
      </InputContainer>
      <InputContainer>
        <label>Пароль</label>
        <SignInput
          type="password"
          {...(register("password"), { required: true })}
        />
        {errors.password && <span>This field is required</span>}
      </InputContainer>
      <ButtonSwitch sign={sign} onClick={change}>
        {sign === "up" || sign === "" ? "Зарегистрироваться" : "Войти"}
      </ButtonSwitch>
    </SignForm>
  );
}
