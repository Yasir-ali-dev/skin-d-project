import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { uri } from "../url";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const navigation = useNavigation();

  const getData = async () => {
    try {
      const response = await fetch(`${uri}/patients`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPatients(data.patients);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.patientList}>
      <ScrollView
        style={styles.patientListInner}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        {patients &&
          patients.map((patient) => (
            <View
              key={patient._id}
              style={[styles.frameContainer, styles.frameBorder]}
            >
              <View
                style={[styles.ellipseParent, styles.ellipseParentPosition]}
              >
                <Image
                  style={styles.frameChild}
                  source={require("../assets/men.png")}
                />
                <View style={styles.aaravRanaParent}>
                  <Text style={[styles.aaravRana, styles.aaravRanaTypo]}>
                    {patient.name}
                  </Text>
                  <Text style={[styles.years, styles.yearsLayout]}>
                    {patient.age} years
                  </Text>
                </View>
              </View>

              <Pressable
                onPress={() =>
                  navigation.navigate("PatientDetails", { patient, patient })
                }
              >
                <Image
                  style={[styles.viewDetails, styles.viewLayout]}
                  source={require("../assets/view-details1.png")}
                />
              </Pressable>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ellipseParentPosition: {
    left: 0,
    top: 0,
  },
  aaravRanaTypo: {
    fontWeight: "600",
    textAlign: "left",
  },
  yearsLayout: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
  },
  viewLayout: {
    height: 23,
    width: 98,
    position: "absolute",
  },
  frameBorder: {
    width: 335,
    borderBottomWidth: 1,
    borderColor: Color.colorWhitesmoke,
    borderStyle: "solid",
  },
  frameChild: {
    width: 54,
    height: 54,
  },
  aaravRana: {
    color: Color.cOLORESGray4,
    textAlign: "left",
    lineHeight: 21,
  },
  years: {
    color: Color.cOLORESGray6,
    marginTop: 1,
    textAlign: "left",
  },
  aaravRanaParent: {
    marginLeft: 10,
  },
  ellipseParent: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  viewDetails: {
    top: 15,
    left: 238,
  },
  frameContainer: {
    height: 75,
  },
  frameParent: {
    flex: 1,
  },
  patientListInner: {
    flex: 1, // Occupy entire available space
    top: 10,
  },
  patientList1: {
    marginTop: 2,
    top: "60%",
    left: 69,
    fontSize: 20,
    color: Color.cOLORESWhite,
    textAlign: "left",
    position: "absolute",
  },
  backIcon: {
    height: "18.04%",
    width: "2.4%",
    top: "62%",
    right: "90.13%",
    bottom: "27.72%",
    left: "7.47%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  topbar: {
    marginLeft: -188,
    left: "48%",
    backgroundColor: "#429924",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    width: 390,
    height: 120,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  patientList: {
    borderRadius: 30,
    backgroundColor: Color.cOLORESWhite,
    width: "100%",
    height: "100%", // Ensure the component occupies the entire screen
    overflow: "hidden",
    flex: 1,
  },
});

export default PatientList;
