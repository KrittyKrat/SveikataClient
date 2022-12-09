import { setAuthToken } from "./authTest";

export default function authHeader() {

  const token = localStorage.getItem("token");
  if (token) {
    return JSON.parse(token).accessToken;
  }
} 