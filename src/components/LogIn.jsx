import React, { useState } from 'react';
import { styled } from 'styled-components';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here, such as sending data to a server
    // console.log(`Logging in user: ${username}, ${password}`);
  };

  return (
    <LoginWrapper>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export default Login;