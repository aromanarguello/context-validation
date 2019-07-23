import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import UserCard from "./components/UserCard/UserCard";
import { LoginProvider } from "./context/LoginContext";
import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section``;

const App = () => {
  return (
    <Main>
      <LoginProvider>
        <LoginForm />
        <Section>
          <UserCard />
        </Section>
      </LoginProvider>
    </Main>
  );
};

export default App;
