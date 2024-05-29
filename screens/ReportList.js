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
import { home_uri, uri } from "../url";
import { useNavigation } from "@react-navigation/native";
const ReportList = () => {
  const [reports, setReports] = useState([]);
  const navigation = useNavigation();

  const getData = async () => {
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
        {reports.map((report, index) => (
          <View
            key={report._id}
            style={[styles.frameContainer, styles.frameBorder]}
          >
            <View style={[styles.ellipseParent, styles.ellipseParentPosition]}>
              <Image
                style={styles.frameChild}
                source={require("../assets/report-icon.gif")}
              />
              <View style={styles.Parent}>
                <Text style={[styles.idTypo]}>{"report " + (index + 1)}</Text>
                <Text style={[styles.nameLayout]}>{report._id}</Text>
              </View>
            </View>
            <Pressable
              onPress={() =>
                navigation.navigate("ReportResults", { report, report })
              }
            >
              <Image
                style={[styles.viewDetails, styles.viewLayout]}
                source={require("../assets/ViewReport.png")}
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
  idTypo: {
    fontWeight: "600",
    textAlign: "left",
    fontSize: 15,
  },
  nameLayout: {
    lineHeight: 25,
    fontSize: 12,
  },
  viewLayout: {
    height: 30,
    width: 95,
    position: "absolute",
  },
  frameBorder: {
    marginTop: 12,
    width: 335,
    borderBottomWidth: 1,
    borderColor: Color.colorWhitesmoke,
    borderStyle: "solid",
  },
  frameChild: {
    width: 54,
    height: 54,
  },

  Parent: {
    marginLeft: 12,
  },
  ellipseParent: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  viewDetails: {
    top: 15,
    left: 240,
  },
  frameContainer: {
    height: 73,
  },
  frameParent: {
    flex: 1,
  },
  patientListInner: {
    flex: 1,
    top: 10,
  },
  patientList1: {
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
    marginLeft: -195,
    left: "50%",
    backgroundColor: "#429924",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 2,
    elevation: 30,

    shadowOpacity: 1,
    width: 390,
    height: 120,
    top: 0,
    position: "absolute",

    overflow: "hidden",
    flex: 1,
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

export default ReportList;
