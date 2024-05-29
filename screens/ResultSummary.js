import React from "react";
import { Image, Text, View } from "react-native";
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";
import { Color, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/core";

const ResultSummary = () => {
  const [patients, setPatients] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [reports, setReports] = useState([]);

  const getReportData = async () => {
    try {
      const response = await fetch(`${uri}/reports`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      JSON.stringify(data.reports);
      setReports(data.reports);
    } catch (error) {
      console.log(error);
    }
  };

  const getPatientData = async () => {
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

  const getFeedbackData = async () => {
    try {
      const response = await fetch(`${uri}/feedbacks`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setFeedbacks(data.all_feedbacks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPatientData();
    getFeedbackData();
    getReportData();
  }, []);

  const barData = [
    {
      value: 230,
      label: "Jan",
      frontColor: "#4ABFF4",
      sideColor: "#23A7F3",
      topColor: "#92e6f6",
    },
    {
      value: 180,
      label: "Feb",
      frontColor: "#79C3DB",
      sideColor: "#68BCD7",
      topColor: "#9FD4E5",
    },
    {
      value: 195,
      label: "Mar",
      frontColor: "#28B2B3",
      sideColor: "#0FAAAB",
      topColor: "#66C9C9",
    },
    {
      value: 250,
      label: "Apr",
      frontColor: "#4ADDBA",
      sideColor: "#36D9B2",
      topColor: "#7DE7CE",
    },
    {
      value: 320,
      label: "May",
      frontColor: "#91E3E3",
      sideColor: "#85E0E0",
      topColor: "#B0EAEB",
    },
  ];

  const pieData = [
    { value: 54, color: "#177AD5" },
    { value: 40, color: "#79D2DE" },
    { value: 20, color: "#ED6665" },
  ];

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
        <View style={{ display: "flex", flexDirection: "row", padding: 3 }}>
          <Image source={require("../assets/patient-icon.png")}></Image>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "700",
              color: Color.colorForestgreen_200,
            }}
          >
            7
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", padding: 3 }}>
          <Image source={require("../assets/microscope-icon.png")}></Image>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "700",
              color: Color.colorForestgreen_200,
            }}
          >
            5
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", padding: 3 }}>
          <Image source={require("../assets/feedback-icon.png")}></Image>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "700",
              color: Color.colorForestgreen_200,
            }}
          >
            5
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", padding: 3 }}>
          <Image source={require("../assets/reports-icon.png")}></Image>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "700",
              color: Color.colorForestgreen_200,
            }}
          >
            5
          </Text>
        </View>
      </View>
      <BarChart
        height={180}
        showFractionalValue
        showYAxisIndices
        hideRules
        noOfSections={4}
        maxValue={400}
        data={barData}
        barWidth={40}
        sideWidth={15}
        isThreeD
        side="right"
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
          data={pieData}
          radius={90}
          donut
          showText
          showValuesAsLabels
          showTextBackground
          textBackgroundColor="#333"
          textBackgroundRadius={22}
          textColor="white"
          textSize={16}
          fontWeight="bold"
          strokeWidth={10}
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
            gap: 10,
            paddingHorizontal: 5,
          }}
        >
          <Text style={{ color: "red", fontSize: 20 }}>RED </Text>
          <Text style={{ color: "blue", fontSize: 20 }}>BLUE </Text>
          <Text style={{ color: "lightblue", fontSize: 20 }}>SKY BLUE</Text>
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
