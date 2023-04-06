import { instance } from "./axios";

const LoginApi = (account_id, password) => {
  const response = instance.post(`/user/sign`, {
    account_id,
    password,
  });
  return response;
};

export default LoginApi;
