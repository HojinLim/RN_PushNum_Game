import axios from "axios";
import { API_KEY } from "@env";
import { Profile } from "../constants/types";

async function authenticate(
  mode: string,
  email: string,
  password: string
): Promise<Profile> {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });


  return response.data;
}

async function createUser(email: string, password: string) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    { email, password, returnSecureToken: true }
  );
  return response.data;
}

async function login(email: string, password: string) {
  try {
    const token = await authenticate("signInWithPassword", email, password);
    return token;
  } catch (error) {
    throw error;
  }
}

export { createUser, login };
