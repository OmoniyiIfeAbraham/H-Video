import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CallActionBox from "../../Components/CallActionBox";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Pressable } from "react-native";

const CallingScreen = ({ navigation, route }) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.page}>
      <Pressable onPress={() => goBack} style={styles.backButton}>
        <Ionicons name="chevron-back" color={"white"} size={25} />
      </Pressable>
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>Alex</Text>
        <Text style={styles.phoneNumber}>ringing +234 90 3282 5450</Text>
      </View>

      <CallActionBox />
    </View>
  );
};

const styles = StyleSheet.create({
  page: { height: "100%", backgroundColor: "#7b4e80" },
  cameraPreview: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginTop: 50,
    marginBottom: 15,
  },
  phoneNumber: { fontSize: 20, color: "white" },
  backButton: {
    position: "absolute",
    top: 50,
    left: 10,
  },
});

export default CallingScreen;
