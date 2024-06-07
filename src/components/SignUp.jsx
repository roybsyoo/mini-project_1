import React, { useState } from 'react';
import styled from 'styled-components';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordchk, setPasswordchk] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== passwordchk) {
      setError('Passwords do not match. Please try again. Focus!!!!!!!!');
      return;
    }
    // Perform registration logic here, such as sending data to a server
    console.log(`Registering user: ${username}, ${email}, ${password}`);
    setError(''); // Clear error message if passwords match
  };

  return (
    <Container>
      <Content>
        <Title>Registration Page</Title>
        <Form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <label>
            Password 확인:
            <input
              type="password"
              value={passwordchk}
              onChange={(event) => setPasswordchk(event.target.value)}
            />
          </label>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <button type="submit">Register</button>
        </Form>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Content = styled.div`
  max-width: 600px;
  width: 100%;
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

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

  label {
    margin-bottom: 10px;
  }

  input {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;

    @media (max-width: 768px) {
      padding: 8px;
    }

    @media (max-width: 480px) {
      padding: 6px;
    }
  }

  button {
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }

    @media (max-width: 768px) {
      padding: 8px;
    }

    @media (max-width: 480px) {
      padding: 6px;
    }
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: -10px;
  margin-bottom: 10px;
`;

export default Signup;
