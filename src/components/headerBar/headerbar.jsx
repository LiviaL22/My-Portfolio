import styled from "styled-components";
import React, { useState } from "react";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 5vh;
  margin-top: 10px;
  padding: 10px;
`;

const ButtonMode = styled.button`
  background-color: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

export default function headerBar({ darkMode, setDarkMode }) {
  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Container>
        <ButtonMode onClick={handleClick}>
          {darkMode ? (
            <FaRegMoon color="#fac7f6" />
          ) : (
            <FaRegSun color="#783c8e" />
          )}
        </ButtonMode>
      </Container>
    </>
  );
}
