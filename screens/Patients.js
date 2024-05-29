import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Patients = () => {
  return (
    <View style={{ flex: 1, flexDirection: "column", paddingTop: 30 }}>
      <View>
        <View style={styles.card}>
          <Image
            style={styles.icon}
            source={require("../assets/patient-1.png")}
          />
          <Text style={styles.name}>asd</Text>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.icon}
            source={require("../assets/patient-1.png")}
          />
          <Text style={styles.name}>asd</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 7,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Patients;
