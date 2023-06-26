import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

import ContactsScreen from "./src/Screens/ContactsScreen/Index";
import CallingScreen from "./src/Screens/CallingScreen";
import IncomingCallScreen from "./src/Screens/IncomingCallScreen";

export default function App() {
  return (
    <>
      <StatusBar style="dark-content" />
      <CallingScreen />
    </>
  );
}
