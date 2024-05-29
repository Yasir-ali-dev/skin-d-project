import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const FeedbackDetails = ({ route }) => {
  const feedback = route.params.feedback;
  console.log(feedback);
  return (
    <View style={styles.patientDetails}>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={styles.patientDetailsInner}
          contentFit="cover"
          source={require("../assets/feedback_icon.png")}
        />
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#006400", fontSize: 15 }}>{feedback._id}</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 10,
          width: "100%",
          height: 300,
        }}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ fontSize: 20 }}>feedback_type: </Text>
          <Text style={{ fontSize: 20, color: "#006400" }}>
            {feedback.feedback_type}
          </Text>
        </View>

        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ fontSize: 20 }}>lesion_color: </Text>
          <Text style={{ fontSize: 20, color: "#006400" }}>
            {feedback.lesion_color}
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ fontSize: 20 }}>lesion_location: </Text>
          <Text style={{ fontSize: 20, color: "#006400" }}>
            {feedback.lesion_location}
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ fontSize: 20 }}>lesion_texture: </Text>
          <Text style={{ fontSize: 20, color: "#006400" }}>
            {feedback.lesion_texture}
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ fontSize: 20 }}>lesion_size: </Text>
          <Text style={{ fontSize: 20, color: "#006400" }}>
            {feedback.lesion_size}
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ fontSize: 20 }}>feedback_details: </Text>
          <Text style={{ fontSize: 20, color: "#006400" }}>
            {feedback.feedback_details}
          </Text>
        </View>
      </View>
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
    left: 0,
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
    width: 182,
    height: 179,
    alignContent: "center",
    textAlign: "center",
  },
  aaravRana: {
    top: 256,
    left: 120,
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
    backgroundColor: "#FFFEFA",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 50,
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default FeedbackDetails;
