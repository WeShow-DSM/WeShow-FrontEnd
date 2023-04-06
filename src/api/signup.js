import { instance } from "./axios";

const Signup = (account_id, password, nickname) => {
  const response = instance.post(`/user/signup`, {
    account_id,
    password,
    nickname,
  });
  return response;
};

export default Signup;
