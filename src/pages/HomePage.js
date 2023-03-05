import React from "react";
import {
  StyledContainer,
  StyledTitle,
  StyledSubTitle,
  Avatar,
  StyledButton,
  ButtonGroup,
} from "./Styles";

import Logo from "../image/kindpng_123659.png";

const HomePage = () => {
  return (
    <StyledContainer>
      <div>
        <div
          style={{
            top: 0,
            left: "0",
            position: "absolute",
            backgroundColor: "transparent",
            width: "100%",
            padding: "15px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Avatar image={Logo} />
        </div>
        <StyledTitle size={65}>Welcome</StyledTitle>
        <StyledSubTitle size={27}>Welcome</StyledSubTitle>

        <ButtonGroup>
          <StyledButton href="/login">Login</StyledButton>
          <StyledButton href="/register">Register</StyledButton>
        </ButtonGroup>
      </div>
    </StyledContainer>
  );
};

export default HomePage;
