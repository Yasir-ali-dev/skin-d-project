import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const PatientDetails = ({ route }) => {
  const patient = route.params.patient;

  return (
    <View style={styles.patientDetails}>
      <View style={styles.patientDetailsChild} />
      <View style={[styles.ellipseParent, styles.ellipseParentFlexBox]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-61.png")}
        />
        <Text style={styles.yrsTypo}>{patient.email}</Text>
      </View>
      {/* done */}
      <View style={[styles.vectorParent, styles.vectorPosition]}>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/ellipse-61.png")}
        />
        <Text style={styles.yrsTypo}>{patient.cancer_acquired_date}</Text>
      </View>
      <View style={[styles.vectorGroup, styles.vectorPosition]}>
        <Image
          style={styles.frameInner}
          contentFit="cover"
          source={require("../assets/ellipse-62.png")}
        />
        <Text style={styles.yrsTypo}>{patient.date_of_birth}</Text>
      </View>
      <View style={[styles.ellipseGroup, styles.ellipseParentFlexBox]}>
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-63.png")}
        />
        <Text style={styles.yrsTypo}>{patient.phone}</Text>
      </View>
      <View style={[styles.ellipseContainer, styles.ellipseParentFlexBox]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-64.png")}
        />
        <Text style={styles.address}>{patient.address}</Text>
      </View>

      <View style={[styles.frameView, styles.ellipseParentFlexBox]}>
        <Image
          style={styles.frameChild2}
          contentFit="cover"
          source={require("../assets/ellipse-65.png")}
        />
        <Text style={styles.yrsTypo}>{patient.gender}</Text>
      </View>

      <View style={[styles.ellipseParent1, styles.ellipseParentFlexBox]}>
        <Image
          style={styles.frameChild3}
          contentFit="cover"
          source={require("../assets/ellipse-66.png")}
        />
        <Text style={styles.yrsTypo}>{`${patient.age} yrs`}</Text>
      </View>
      <Image
        style={styles.patientDetailsItem}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Image
        style={styles.patientDetailsInner}
        contentFit="cover"
        source={require("../assets/ellipse-67.png")}
      />
      <Text style={styles.aaravRana}>{patient.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  vectorPosition: {
    left: 64,
    alignItems: "center",
    flexDirection: "row",
    width: 230,
    position: "absolute",
  },
  patientDetailsChild: {
    top: 175,
    left: 6,
    borderTopLeftRadius: Border.br_33xl,
    borderTopRightRadius: Border.br_33xl,
    borderBottomRightRadius: Border.br_19xl,
    borderBottomLeftRadius: Border.br_19xl,
    backgroundColor: Color.c0,
    width: 385,
    height: 670,
    position: "absolute",
  },
  frameChild: {
    width: 45,
    height: 40,
  },
  yrsTypo: {
    marginLeft: 44,

    lineHeight: 21,
    fontSize: FontSize.size_sm,
    transform: [
      {
        rotate: "0.7deg",
      },
    ],
    textAlign: "left",
    color: Color.cOLORESGray4,
    fontWeight: "600",
  },
  ellipseParent: {
    top: 564,
    width: 230,
    flexDirection: "row",
    left: 63,
  },
  frameItem: {
    width: 45,
    height: 45,
  },
  vectorParent: {
    top: 631,
    height: 54,
  },
  frameInner: {
    width: 47,
    height: 42,
  },
  vectorGroup: {
    top: 440,
    height: 50,
  },
  ellipseIcon: {
    width: 50,
    height: 42,
  },
  ellipseGroup: {
    top: 504,
    width: 230,
    flexDirection: "row",
    left: 63,
  },
  address: {
    fontSize: 15,
    letterSpacing: 1.5,
    fontWeight: "500",

    width: 220,
    marginLeft: 40,
    transform: [
      {
        rotate: "0.7deg",
      },
    ],
    textAlign: "left",
    color: Color.cOLORESGray4,
  },
  ellipseContainer: {
    top: 697,
    left: 65,
    width: 235,
  },
  frameChild2: {
    height: 35,
    width: 50,
  },
  frameView: {
    top: 376,
    height: 52,
    width: 230,
    flexDirection: "row",
    left: 63,
  },
  frameChild3: {
    width: 50,
    height: 50,
  },
  ellipseParent1: {
    top: 313,
    left: 60,
    width: 230,
    flexDirection: "row",
  },
  patientDetailsItem: {
    top: 10,
    left: 69,
    width: 253,
    height: 233,
    position: "absolute",
  },
  patientDetailsInner: {
    top: 45,
    left: 120,
    width: 182,
    height: 179,
    position: "absolute",
  },
  aaravRana: {
    top: 256,
    left: 105,
    fontSize: 24,
    lineHeight: 36,
    textAlign: "left",
    color: Color.cOLORESGray4,
    fontWeight: "600",
    position: "absolute",
  },
  backIcon: {
    height: "2.63%",
    width: "3.89%",
    top: "6.63%",
    right: "86.39%",
    bottom: "90.75%",
    left: "9.72%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  patientDetails: {
    borderRadius: Border.br_19xl,
    backgroundColor: "#429924",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default PatientDetails;
