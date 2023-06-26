import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

import ContactsScreen from "./src/Screens/ContactsScreen/Index";
import CallingScreen from "./src/Screens/CallingScreen";
import IncomingCallScreen from "./src/Screens/IncomingCallScreen";
import CallScreen from "./src/Screens/CallScreen";

export default function App() {
  return (
    <>
      <StatusBar style="dark-content" />
      <CallScreen />
    </>
  );
}
