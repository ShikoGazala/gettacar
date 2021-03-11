import Axios, { AxiosRequestConfig } from "axios";

export const onRegister = async (data: string) => {
  const request: AxiosRequestConfig = {
    method: "post",
    url: "http://localhost:3000/register",
    data: { username: data },
  };

  const { data: response } = await Axios.request(request);
  return response;
};
