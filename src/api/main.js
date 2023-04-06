import { instance } from "./axios";

const MainApi = () => {
  const response = instance.get(`/product/v1`);
  return response;
};

export default MainApi;
