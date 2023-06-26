import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CallActionBox from "../../Components/CallActionBox";

const CallScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.cameraPreview}></View>

      <View></View>

      <CallActionBox />
    </View>
  );
};

const styles = StyleSheet.create({
  cameraPreview: {
    width: 100,
    height: 150,
    backgroundColor: "#ffff6e",
    position: "absolute",
    right: 10,
    top: 100,
    borderRadius: 10,
  },
  page: {
    flex: 1,
    backgroundColor: "#7b4e80",
  },
});

export default CallScreen;
