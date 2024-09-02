import axios from "axios";

const postLogin = async (emailOrUsername, password) => {
  const response = await axios({
    method: "POST",
    url: "http://localhost:80/login",
    data: { emailOrUsername, password },
  });

  return response;
};

export { postLogin };
