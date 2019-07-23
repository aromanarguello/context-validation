import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

export default App;
