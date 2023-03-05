import styled from "styled-components";

import background from "../image/1.avif";
import image from "../image/1.avif";

export const colors = {
  primary: "#fff",
  theme: "#be185d",
  light1: "#f3f4f6",
  light2: "#e5e7e8",
  dark1: "#1f2937",
  dark2: "#405563",
  dark3: "#9ca3af",
  red: "#0c2626",
};

export const StyledContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${background});
  background-size: cover;
  background-attachment: fixed;
`;

export const StyledTitle = styled.h2`
  text-align: center;
  padding: 5px;
  margin-bottom: 20px;
  color: ${(props) => (props.color ? props.color : colors.primary)};
  font-size: ${(props) => props.size}px;
`;
export const StyledSubTitle = styled.p`
  text-align: center;
  padding: 5px;
  margin-bottom: 25px;
  color: ${(props) => (props.color ? props.color : colors.primary)};
  font-size: ${(props) => props.size}px;
`;
export const Avatar = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 50px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  margin: auto;
`;
export const StyledButton = styled.a`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 3px solid ${colors.primary};
  border-radius: 25px;
  color: ${colors.primary};
  text-decoration: none;
  text-align: center;
  transition: ease-in-out 0.5s;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.theme};
    cursor: pointer;
  }
`;
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 25px;
`;
export const StyledTextInput = styled.input`
  width: 280px;
  padding: 15px;
  padding-left: 50px;
  font-size: 17px;
  letter-spacing: 1px;
  outline: none;
  color: ${colors.dark1};
  background-color: ${colors.light2};
  border: 0;
  display: block;
  margin: 5px auto 10px auto;
  transition: ease-in-out 0.5s;

  ${(props) =>
    props.invalid && `background-color:${colors.red};color:${colors.primary}`}

  &:focus {
    background-color: ${colors.dark2};
  }
  color: ${colors.primary};
`;
export const StyledLabel = styled.p`
  text-align: left;
  font-size: 13px;
  font-weight: bold;
`;
export const StyledFormArea = styled.div`
  background-color: ${(props) => props.bg || colors.light1};
  text-align: center;
  padding: 45px 55px;
`;
export const StyledFormButton = styled.button`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 2px solid ${colors.primary};
  border-radius: 25px;
  color: ${colors.theme};
  transition: ease-in-out 0.5s;

  &:hover {
    background-color: ${colors.theme};
    color: ${colors.primary};
    cursor: pointer;
  }
`;
export const StyledIcon = styled.p`
  color: ${colors.dark1};
  position: absolute;
  font-size: 21px;
  top: 40px;
  ${(props) => props.right && `right: 15px`}
  ${(props) => !props.right && `left: 15px`}
`;
