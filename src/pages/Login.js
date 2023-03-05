import React from "react";
import {
  StyledContainer,
  StyledFormArea,
  StyledFormButton,
  Avatar,
  StyledTitle,
  colors,
  ButtonGroup,
} from "./Styles";

import Logo from "../image/kindpng_123659.png";

import { Formik, form } from "formik";

import { TextInput } from "./FormLib";
import { CiMail, CiLock } from "react-icons/ci";

const Login = () => {
  return (
    <StyledContainer>
      <div>
        <StyledFormArea>
          <Avatar image={Logo} />
          <StyledTitle color={colors.theme} size={30}>
            Login
          </StyledTitle>
          <Formik>
            {/* {() => ( */}
            <form>
              <TextInput
                name="email"
                type="email"
                label="Email"
                placeholder="Email"
                icon={<CiMail />}
              />
              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="Password"
                icon={<CiLock />}
              />
              <ButtonGroup>
                <StyledFormButton type="submit">Login</StyledFormButton>
              </ButtonGroup>
            </form>
            {/* )} */}
          </Formik>
        </StyledFormArea>
      </div>
    </StyledContainer>
  );
};

export default Login;
