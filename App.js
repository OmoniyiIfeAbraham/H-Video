import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Navigation from "./src/navigation";

export default function App() {
  return (
    <>
      <StatusBar style="dark-content" />

      <Navigation />
    </>
  );
}
