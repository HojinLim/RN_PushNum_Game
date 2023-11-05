import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { setToken } from "../store/tokenSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const dispatch = useDispatch();

  async function signupHandler({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      dispatch(setToken(token));
      AsyncStorage.setItem("token", token);
    } catch (error) {
      Alert.alert("Login Error!", "Some Error occured! Try it later");
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent isLogin={false} onAuthenticate={signupHandler} />;
}

export default SignupScreen;
