import { useState } from "react";
import LoginPageView from "./view";
import { postLogin } from "../../../utils/api";

const LoginPage = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const fetchPostLogin = async () => {
    try {
      const response = await postLogin(emailOrUsername, emailOrUsername);
      console.log(response);
    } catch (error) {
      console.log(error, "????");
      setError(error.response.data.message);
      console.log(setError, "<><>");
    }
  };

  const handleEmailOrUsernameChange = (e) => {
    setEmailOrUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPostLogin();
  };

  return (
    <LoginPageView
      error={error}
      emailOrUsername={emailOrUsername}
      passwod={password}
      handleEmailOrUsernameChange={handleEmailOrUsernameChange}
      handlePasswordChange={handlePasswordChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginPage;
