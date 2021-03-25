import React from "react";
import styled from "styled-components";

const Button = ({ clicked, setClicked }) => {
  return (
    <div>
      <StyledButton
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        Another One
      </StyledButton>
    </div>
  );
};

const StyledButton = styled.button`
  background-color: #000;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  font-family: "Staatliches", cursive;
`;

export default Button;
