import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";
import { Color } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/core";
import { uri } from "./../url";

const ResultSummary = () => {
  const [patients, setPatients] = React.useState([]);
  const [feedbacks, setFeedbacks] = React.useState([]);
  const [reports, setReports] = React.useState([]);
  const [line, setLine] = useState();
  const [bar, setBar] = useState({ MEL: 0, SCC: 0, BCC: 0, MCC: 0 });
  let [negative, setNegative] = useState(0);
  let [positive, setPositive] = useState(0);
  const getReportData = async () => {
    try {
      const response = await fetch(`${uri}/reports`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      JSON.stringify(data.reports);
      setReports(data.reports);
      setBar({
        MEL: data.reports.filter((report) => report.lesion.lesion_type == "MEL")
          .length,
        SCC: data.reports.filter((report) => report.lesion.lesion_type == "SCC")
          .length,
        BCC: data.reports.filter((report) => report.lesion.lesion_type == "BCC")
          .length,
        MCC: data.reports.filter((report) => report.lesion.lesion_type == "MCC")
          .length,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getPatientData = async () => {
    let data;
    try {
      const response = await fetch(`${uri}/patients`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      data = await response.json();
      setPatients(data.patients);
    } catch (error) {
      console.log(error);
    }
  };

  const getFeedbackData = async () => {
    try {
      const response = await fetch(`${uri}/feedbacks`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setFeedbacks(data.all_feedbacks);
      setNegative(
        feedbacks.filter((feedback) => feedback.feedback_type == "-ve").length
      );
      setPositive(
        feedbacks.filter((feedback) => feedback.feedback_type == "+ve").length
      );
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getPatientData();
    getFeedbackData();
    getReportData();
  }, []);

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
  const lineData2 = [
    { value: 0 },
    { value: 20 },
    { value: 18 },
    { value: 40 },
    { value: 36 },
    { value: 60 },
    { value: 54 },
    { value: 85 },
  ];

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 10,
        gap: 11,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          paddingHorizontal: 3,
          gap: 10,
          paddingVertical: 5,
        }}
      >
        <View
          style={{ display: "flex", flexDirection: "row", padding: 3, gap: 5 }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../assets/patient-icon.png")}></Image>
            <Text>patients</Text>
          </View>
          <Text
            style={{
              fontSize: 40,
              fontWeight: "700",
              color: Color.colorForestgreen_200,
            }}
          >
            {patients.length}
          </Text>
        </View>
        <View
          style={{ display: "flex", flexDirection: "row", padding: 3, gap: 5 }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../assets/microscope-icon.png")}></Image>

            <Text>reports</Text>
          </View>
          <Text
            style={{
              fontSize: 40,
              fontWeight: "700",
              color: Color.colorForestgreen_200,
            }}
          >
            {reports.length}
          </Text>
        </View>

        <View
          style={{ display: "flex", flexDirection: "row", padding: 3, gap: 5 }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../assets/feedback-icon.png")}></Image>

            <Text>feedbacks</Text>
          </View>
          <Text
            style={{
              fontSize: 40,
              fontWeight: "700",
              color: Color.colorForestgreen_200,
            }}
          >
            {feedbacks.length}
          </Text>
        </View>
      </View>
      <BarChart
        height={150}
        showFractionalValue
        showYAxisIndices
        hideRules
        noOfSections={5}
        maxValue={15}
        data={[
          {
            value: 14,
            label: "MEL",
            frontColor: "#4ABFF4",
            sideColor: "#23A7F3",
            topColor: "#92e6f6",
          },
          {
            value: 10,
            label: "SCC",
            frontColor: "#79C3DB",
            sideColor: "#68BCD7",
            topColor: "#9FD4E5",
          },
          {
            value: 7,
            label: "BCC",
            frontColor: "#28B2B3",
            sideColor: "#0FAAAB",
            topColor: "#66C9C9",
          },
          {
            value: 12,
            label: "MCC",
            frontColor: "#4ADDBA",
            sideColor: "#36D9B2",
            topColor: "#7DE7CE",
          },
        ]}
        barWidth={40}
        sideWidth={15}
        isThreeD
        side="center"
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingHorizontal: 2,
          paddingVertical: 7,
        }}
      >
        <PieChart
          data={[
            {
              value: 3,
              color: "#ED6665",
            },
            {
              value: 17,
              color: "#42f584",
            },
          ]}
          radius={90}
          donut
          showText
          showValuesAsLabels
          showTextBackground
          textBackgroundColor="#333"
          textBackgroundRadius={22}
          textColor="white"
          textSize={20}
          fontWeight="bold"
          strokeWidth={2}
          strokeColor="#333"
          innerCircleBorderWidth={10}
          innerCircleBorderColor="#333"
          showGradient
        />
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 7,
            paddingHorizontal: 5,
          }}
        >
          <Text style={{ color: "blue", fontSize: 20 }}>
            no +ve/-ve feedbacks
          </Text>
          <Text style={{ color: "red", fontSize: 20 }}>-ve </Text>
          <Text style={{ color: "#42f584", fontSize: 20 }}>+ve</Text>
        </View>
      </View>

      <View>
        <LineChart
          areaChart
          curved
          data={lineData}
          data2={lineData2}
          height={170}
          showVerticalLines
          spacing={44}
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
    </View>
  );
};

export default ResultSummary;
