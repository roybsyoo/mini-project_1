import { useState } from "react";
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom"; 

const NavBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/Login");
  };

  const handleJoin = () => {
    navigate("/Signup");
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  }

  return (
    <NavWrapper>
      <Logo onClick={() => navigate("/")}>
        <img
          width={'80px'}
          alt="logo"
          src="public/images/original.png"
        />
      </Logo>
      <ButtonContainer>
        <JoinButton onClick={handleJoin}>회원가입</JoinButton>
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
      </ButtonContainer>
      <Input
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="검색"
      />
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  background-color: #a5a5a5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 3;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
`;

const Logo = styled.div`
  cursor: pointer;

  img {
    display: block;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const Input = styled.input`
  margin-left: auto;
  background-color: #f0f8ff;
  border-radius: 5px;
  color: black;
  padding: 5px;
  border: 1px solid lightgray;
  width: 200px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;

const LoginButton = styled.button`
  background-color: #d9d9d9;
  width: 95px;
  height: 40px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f8ff;
  }
`;

const JoinButton = styled.button`
  background-color: #d9d9d9;
  color: black;
  width: 95px;
  height: 40px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f8ff;
  }
`;

export default NavBar;
