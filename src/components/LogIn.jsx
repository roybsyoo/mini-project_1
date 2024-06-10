import React, { useState } from 'react';
import styled from 'styled-components';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import app from '../firebase'; // Ensure correct import path and named export

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const auth = getAuth(app);
    
    // 로그인 로직
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        console.log('Email login successful');
        localStorage.setItem('userData', JSON.stringify(userCredential.user));
        navigate('/'); // 로그인 성공 후 메인화면으로 이동
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleAuth = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('Google login successful');
        localStorage.setItem('userData', JSON.stringify(result.user));
        navigate('/'); // 로그인 성공 후 메인화면으로 이동
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <LoginWrapper>
        <Title>Login Page</Title>
        <Form onSubmit={handleSubmit}>
          <Label>
            Email:
            <Input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Label>
          <Label>
            Password:
            <Input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Label>
          <Button type="submit">Login</Button>
        </Form>
        <GoogleButton onClick={handleAuth}>Google Login</GoogleButton>
      </LoginWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const LoginWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 15px;
  font-size: 1rem;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 8px;
  }

  @media (max-width: 480px) {
    padding: 6px;
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 8px;
  }

  @media (max-width: 480px) {
    padding: 6px;
  }
`;

const GoogleButton = styled(Button)`
  background-color: #db4437;

  &:hover {
    background-color: #c23321;
  }
`;

export default Login;
