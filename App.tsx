import React, { Dispatch, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Colors } from "./constants/styles";
import IconButton from "./components/ui/IconButton";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, store } from "./store/store";
import { setToken } from "./store/tokenSlice";
import { Alert } from "react-native";
import { AnyAction } from "@reduxjs/toolkit";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
async function logout(dispatch: Dispatch<AnyAction>) {
  dispatch(setToken({ email: "", idToken: "" }));
  await AsyncStorage.removeItem("token");
  Alert.alert("로그아웃 되었습니다!");
}

function AuthenticatedStack() {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={() => {
                logout(dispatch);
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const token = useSelector((state: RootState) => state.profile.idToken);
  const email = useSelector((state: RootState) => state.profile.email);
  return (
    <NavigationContainer>
      {!token && <AuthStack />}
      {token && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchToken() {
      const profile = await AsyncStorage.getItem("token");

      // console.log(profile);
      if (profile) {
        // dispatch(setToken(storedToken));
        // AsyncStorage.setItem("token", storedToken);
      }
      setIsTryingLogin(false);
    }

    fetchToken();
  }, [dispatch]);

  if (isTryingLogin) {
    return <AppLoading />;
  }

  return <Navigation />;
}

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <Root />
    </Provider>
  );
}
