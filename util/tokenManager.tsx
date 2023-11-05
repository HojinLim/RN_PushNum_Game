// import React, { useEffect } from "react";
// import { View } from "react-native";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../store/store";
// import { setToken } from "../store/tokenSlice";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export const TokenManager = () => {
//   const dispatch = useDispatch();
//   const token = useSelector((state: RootState) => state.token.content);

//   useEffect(() => {
//     // You can dispatch actions and perform other logic when this component mounts
//   }, []);

//   // Functions like authenticate and logout should be defined within this component
//   const authenticate = (token: any) => {
//     dispatch(setToken(token));
//     AsyncStorage.setItem("token", token);
//   };

//   const logout = () => {
//     dispatch(setToken(""));
//     AsyncStorage.removeItem("token");
//   };

//   return <View></View>;
// };