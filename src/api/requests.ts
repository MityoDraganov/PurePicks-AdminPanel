import * as api from "./api";

import { AdminLoginData } from "../Interfaces/User.interface";

const endpoints = {
  //auth
  auth: (path: string | undefined) => path ? `auth/${path}` : "auth",
};

// --AUTH--

export const login = (body: AdminLoginData) => {
  return api.post(endpoints.auth("admin/login"), body);
};


export const getAllUsers = () => {
  return api.get(endpoints.auth(undefined))
}