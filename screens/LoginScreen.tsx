import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { login } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { setToken } from "../store/tokenSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Token {
  idToken: string;
  // Include other properties if present in your token object
}

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const dispatch = useDispatch();

  async function loginHandler({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);

      dispatch(setToken(token.idToken));
      AsyncStorage.setItem("token", token.idToken);
    } catch {
      Alert.alert("Login Error!", "Some Error occured! Try it later");
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
