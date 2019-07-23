import React from "react";

const { Provider, Consumer } = React.createContext();

const passwordValidation = password => {
  const passwordValidationRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  if (password === "") console.log("Enter a Password");

  if (!password.match(passwordValidationRegex)) {
    console.log("Your password sucks");
  }
};

const handleSubmit = (username, password) => {
  if (username === "") console.log("Enter Username");
  passwordValidation(password);
};

const LoginProvider = ({ children }) => {
  return (
    <Provider
      value={{
        handleSubmit,
        username: "aromanarguello"
      }}
    >
      {children}
    </Provider>
  );
};

export { LoginProvider, Consumer as LoginConsumer };
