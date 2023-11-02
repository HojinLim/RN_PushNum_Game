import Main from "./components/Main";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "./components/About";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Main" component={Main} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
