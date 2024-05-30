import * as React from "react";
import { StyleSheet, View, Text, Pressable, Touchable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ProfileContainer from "../components/ProfileContainer";
import { Border, Color, FontSize } from "../GlobalStyles";
import { PieChart, LineChart } from "react-native-gifted-charts";

const Dashboard = ({ route }) => {
  const user = route.params.user;
  const navigation = useNavigation();

  const lineData = [
    { value: 0 },
    { value: 10 },
    { value: 8 },
    { value: 58 },
    { value: 56 },
    { value: 78 },
    { value: 74 },
    { value: 98 },
  ];

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable
        style={[styles.addPatient, styles.reportChildLayout]}
        onPress={() => navigation.navigate("AddPatient")}
      >
        <View style={[styles.addPatientChild, styles.childShadowBox1]} />
        <Text style={styles.addPatient1}>Add Patient</Text>
        <Image
          style={styles.patientImgIcon}
          contentFit="cover"
          source={require("../assets/patient-img.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.report, styles.reportChildLayout]}
        onPress={() => navigation.navigate("ReportList")}
      >
        <View style={[styles.reportChild, styles.childShadowBox1]} />
        <Text style={[styles.reports, styles.reportsTypo]}>Reports</Text>
        <Image
          style={styles.reportImgIcon}
          contentFit="cover"
          source={require("../assets/report-img.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.feedback, styles.reportChildLayout]}
        onPress={() => navigation.navigate("AllFeedbacks")}
      >
        <View>
          <View style={[styles.feedbackChild, styles.childShadowBox1]} />
          <Text style={[styles.feedBack, styles.reportsTypo]}>Feed Back</Text>
          <Image
            style={styles.feedbackImgIcon}
            contentFit="cover"
            source={require("../assets/feedback-img.png")}
          />
        </View>
      </Pressable>

      <View style={[styles.managePatients, styles.manageLayout]}>
        <Pressable onPress={() => navigation.navigate("Patients")}>
          <View style={[styles.managePatientsChild, styles.manageLayout]} />
          <Image
            style={[styles.manageImgIcon, styles.imgIconPosition]}
            contentFit="cover"
            source={require("../assets/manage-img.png")}
          />
          <Text
            style={[styles.managePatientsDetails, styles.captureTheSkinTypo]}
          >
            Manage Patients Details
          </Text>
        </Pressable>
      </View>

      <View style={[styles.education, styles.educationPosition]}>
        <Pressable onPress={() => navigation.navigate("EducationResource")}>
          <View style={[styles.educationChild, styles.childShadowBox]} />
          <Text style={[styles.educationResources, styles.resultsSummaryTypo]}>
            Education Resources
          </Text>
          <Image
            style={[styles.educationImgIcon, styles.imgIconLayout]}
            contentFit="cover"
            source={require("../assets/educationimg.png")}
          />
        </Pressable>
      </View>

      <View style={[styles.results, styles.manageLayout]}>
        <Pressable onPress={() => navigation.navigate("ResultSummary")}>
          <View style={[styles.resultsChild, styles.childShadowBox]} />
          <Image
            style={[styles.resultImgIcon, styles.educationPosition]}
            contentFit="cover"
            source={require("../assets/result-img.png")}
          />
          <Text style={[styles.resultsSummary, styles.resultsSummaryTypo]}>
            Results Summary
          </Text>
        </Pressable>
      </View>

      <Pressable
        style={[styles.capture, styles.captureLayout]}
        onPress={() => navigation.navigate("UploadImage")}
      >
        <View style={[styles.captureChild, styles.captureLayout]} />
        <Image
          style={[styles.captureImgIcon, styles.imgIconLayout]}
          contentFit="cover"
          source={require("../assets/capture-img.png")}
        />
        <Text style={[styles.captureTheSkin, styles.dermdetectFlexBox]}>
          Capture the Skin lesion for cancer detection
        </Text>
      </Pressable>
      <ProfileContainer user={user} />

      <View style={styles.skinaccuracyRemovebgPreviewIcon}>
        <Pressable onPress={() => navigation.navigate("ResultSummary")}>
          <View>
            <LineChart
              areaChart
              curved
              data={lineData}
              height={190}
              showVerticalLines
              spacing={40}
              initialSpacing={0}
              color1="skyblue"
              color2="orange"
              textColor1="green"
              hideDataPoints
              dataPointsColor1="blue"
              dataPointsColor2="red"
              startFillColor1="skyblue"
              startFillColor2="orange"
              startOpacity={0.8}
              endOpacity={0.3}
            />
          </View>
        </Pressable>
      </View>

      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Text style={[styles.dermdetect, styles.dermdetectFlexBox]}>
          DermDetect
        </Text>
      </View>
      {/* 
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector@3x.png")}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  reportChildLayout: {
    height: 98,
    position: "absolute",
  },
  childShadowBox1: {
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  reportsTypo: {
    top: 72,
    textAlign: "left",
    color: Color.colorDimgray,

    fontWeight: "600",
    position: "absolute",
  },
  manageLayout: {
    width: 344,
    height: 60,
  },
  imgIconPosition: {
    left: 21,
    width: 48,
  },
  captureTheSkinTypo: {
    color: Color.colorDarkslategray_100,

    fontWeight: "500",
  },
  educationPosition: {
    left: 22,
    position: "absolute",
  },
  childShadowBox: {
    backgroundColor: Color.colorMidnightblue_100,
    width: 344,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  resultsSummaryTypo: {
    height: 21,
    color: Color.colorDarkslategray_100,

    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  imgIconLayout: {
    height: 55,
    position: "absolute",
  },
  captureLayout: {
    height: 83,
    width: 345,
    position: "absolute",
  },
  dermdetectFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  headerPosition: {
    top: "0%",
    position: "absolute",
  },
  addPatientChild: {
    backgroundColor: "#fbe77e",
    height: 98,
    position: "absolute",
    width: 113,
  },
  addPatient1: {
    top: 72,
    left: 11,
    width: 94,
    height: 22,
    textAlign: "left",
    color: Color.colorDimgray,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  patientImgIcon: {
    left: 32,
    height: 53,
    width: 52,
    top: 10,
    position: "absolute",
  },
  addPatient: {
    width: 110,
    height: 98,
    left: 22,
    top: 256,
  },
  reportChild: {
    backgroundColor: "#94ff8b",
    height: 98,
    position: "absolute",
    width: 110,
  },
  reports: {
    left: 27,
    width: 73,
    height: 22,
  },
  reportImgIcon: {
    left: 29,
    height: 50,
    width: 52,
    top: 11,
    position: "absolute",
  },
  report: {
    left: 146,
    width: 110,
    height: 98,
    top: 256,
  },
  feedbackChild: {
    backgroundColor: "#ff7d6c",
    width: 103,
    height: 98,
    position: "absolute",
  },
  feedBack: {
    left: 14,
    width: 87,
    height: 23,
  },
  feedbackImgIcon: {
    borderRadius: 41,
    width: 48,
    left: 28,
    height: 50,
    top: 10,
    position: "absolute",
  },
  feedback: {
    left: 265,
    width: 104,
    top: 256,
  },
  managePatientsChild: {
    backgroundColor: "rgba(0, 53, 156, 0.25)",
    height: 60,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  manageImgIcon: {
    top: 7,
    height: 44,
    position: "absolute",
  },
  managePatientsDetails: {
    top: 18,
    width: 226,
    height: 25,
    fontSize: FontSize.size_mid,

    fontWeight: "500",
    left: 89,
    textAlign: "left",
    position: "absolute",
  },
  managePatients: {
    top: 655,
    height: 80,
    left: 22,
    width: 320,
    position: "absolute",
  },
  educationChild: {
    height: 59,
  },
  educationResources: {
    top: 18,
    left: 88,
    width: 215,
  },
  educationImgIcon: {
    top: 5,
    left: 21,
    width: 48,
  },
  education: {
    top: 726,
    height: 60,
    width: 344,
    left: 22,
  },
  resultsChild: {
    height: 60,
  },
  resultImgIcon: {
    width: 53,
    height: 51,
    top: 5,
  },
  resultsSummary: {
    top: 19,
    width: 188,
    left: 89,
    height: 21,
  },
  results: {
    top: 588,
    height: 60,
    left: 22,
    width: 344,
    position: "absolute",
  },
  captureChild: {
    backgroundColor: "#86fdda",
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  captureImgIcon: {
    top: 14,
    width: 66,
    left: 28,
    height: 55,
  },
  captureTheSkin: {
    top: 26,
    right: 5,
    fontSize: FontSize.bodyLargeMedium_size,
    width: 240,
    height: 20,

    color: Color.colorDarkslategray_100,

    fontWeight: "500",
  },
  capture: {
    top: 154,
    left: 22,
  },
  skinaccuracyRemovebgPreviewIcon: {
    top: 366,
    left: 22,
    width: 309,
    height: 205,
    position: "absolute",
  },
  headerChild: {
    height: "130%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorForestgreen_200,
    width: "100%",
  },
  dermdetect: {
    top: 21,
    left: 100,
    fontSize: FontSize.size_6xl,
    fontWeight: "700",

    color: Color.colorSteelblue,
    width: 212,
    height: 38,
  },
  header: {
    height: "5.58%",
    width: "106.28%",
    right: "-3.5%",
    bottom: "94.43%",
    left: "-2.78%",
  },
  vectorIcon: {
    top: 21,
    left: 34,
    width: 40,
    height: 15,
    display: "none",
    position: "absolute",
  },
  dashboard: {
    borderRadius: Border.br_19xl,
    backgroundColor: Color.c0,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Dashboard;
