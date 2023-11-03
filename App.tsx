import Main from "./components/Main";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "./components/About";
import { NavigationContainer } from "@react-navigation/native";

import { Colors } from "./constants/styles";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: "white",
          
        }}
      >
        <Drawer.Screen name="Main" component={Main} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Signup" component={SignupScreen} />

        {/* <Drawer.Screen name="GamePage" component={GamePage} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
