import React from "react";
import styled from "styled-components";
import { LoginConsumer } from "../../context/LoginContext";

const Container = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin-top: 20px;
`;

const HeadingTwo = styled.h2``;

const UserCard = () => {
  return (
    <LoginConsumer>
      {({ username }) => (
        <Container>
          <HeadingTwo>Welcome: {username}</HeadingTwo>
        </Container>
      )}
    </LoginConsumer>
  );
};

export default UserCard;
