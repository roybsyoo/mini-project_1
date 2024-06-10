import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import app from '../firebase'; // Ensure correct import path

const NavBar = () => {
  const [userData, setUserData] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const auth = getAuth(app);

  const handleLogin = () => {
    navigate('/Login');
  };

  const handleJoin = () => {
    navigate('/Signup');
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUserData(null);
        localStorage.removeItem('userData');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user);
      } else {
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <NavWrapper>
      <Logo onClick={() => navigate('/')}>
        <img
          width={'80px'}
          alt="logo"
          src="public/images/original.png"
        />
      </Logo>

      <ButtonContainer>
        {!userData && (
          <>
            <JoinButton onClick={handleJoin}>회원가입</JoinButton>
            <LoginButton onClick={handleLogin}>로그인</LoginButton>
          </>
        )}
      </ButtonContainer>

      <Input
        type="text"
        className="src__input"
        value={searchValue}
        onChange={handleChange}
        placeholder="검색"
      />

      {userData && (
        <SignOut>
          <UserImg src={userData.photoURL || 'public/images/outline person icon.png'} alt={userData.displayName || 'User'} />
          <DropDown>
          <div onClick={() => navigate('/mypage')}>My Page</div>
            <span onClick={handleLogOut}>Sign Out</span>
          </DropDown>
        </SignOut>
      )}
    </NavWrapper>
  );
};

const UserImg = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  background: #f9f9f9;
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover ${DropDown} {
    opacity: 1;
  }
`;

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