import React from "react";
import LoginContext from "../../context/LoginContext";
import styled from "styled-components";

const Form = styled.form`
  margin-top: 20px;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Input = styled.input`
  margin: 5px;
`;

const Button = styled.button`
  width: 130px;
  height: 25px;
  border-radius: 3px;
  background: #3f72af;
  color: white;
`;
const passwordValidation = password => {
  const passwordValidationRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  if (password === "") alert("Enter a Password");

  if (!password.match(passwordValidationRegex)) {
    alert("Your password sucks");
  }
};

const LoginForm = () => {
  const [password, setPassword] = React.useState("");
  const [username, setUserName] = React.useState("");
  const userInputRef = React.useRef(null);

  const handleSubmit = () => {
    if (username === "") console.log("Enter Username");
    passwordValidation(password);
  };

  return (
    <LoginContext.Provider
      value={{
        password,
        username
      }}
    >
      <Form onSubmit={handleSubmit}>
        <label for="username">Username:</label>
        <Input
          id="username"
          type="text"
          ref={userInputRef}
          onChange={({ target: { value } }) => setUserName(value)}
          value={username}
        />
        <label for="password">Password:</label>
        <Input
          type="password"
          id="password"
          onChange={({ target: { value } }) => setPassword(value)}
          value={password}
        />
        <Button role="button" type="submit" tabIndex={0}>
          Submit
        </Button>
      </Form>
    </LoginContext.Provider>
  );
};

export default LoginForm;
