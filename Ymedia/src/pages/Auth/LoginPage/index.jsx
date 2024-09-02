import { useState } from "react";
import LoginPageView from "./view";
import { postLogin } from "../../../utils/api";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const fetchPostLogin = async () => {
    try {
      const response = await postLogin(email, password);
      console.log(response);
    } catch (error) {
      console.log(error, "????");
      setError(error.response.data.message);
      console.log(setError, "<><>");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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
      email={email}
      passwod={password}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginPage;
