import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { home_uri } from "../url";

const ReportResults = ({ route }) => {
  const navigation = useNavigation();
  const report = route.params.report;

  /*
  const getData = async () => {
    try {
      const response = await fetch(
        `${home_uri}/reports/:65d1e7480bf1216222942221`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("df");

  React.useEffect(() => {
    getData();
  }, []);
*/

  return (
    <View style={styles.reportResults}>
      <Image
        style={styles.reportResultsChild}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />

      <Image
        style={styles.microskopIcon}
        contentFit="cover"
        source={require("../assets/microskop.png")}
      />

      <View style={styles.reportResultsInner} />
      <Text style={[styles.finished, styles.resultsTypo]}>Report</Text>
      <Text style={[styles.results, styles.resultsTypo]}>Results</Text>

      <Pressable onPress={() => navigation.navigate("Feedback")}>
        <Text style={styles.giveFeedback}>Give Feedback</Text>
      </Pressable>

      <View style={[styles.resultItem, styles.resultItemLayout]}>
        <View style={[styles.resultItemChild, styles.dnaIconPosition]} />
        <View style={[styles.image, styles.imagePosition]}>
          <View style={styles.imageChild} />
          <Image
            style={[styles.dnaIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/dna.png")}
          />
        </View>
        <View style={[styles.text, styles.textPosition]}>
          <Text style={[styles.cancer, styles.nameTypo]}>Cancer Type</Text>
          <Text style={[styles.type, styles.typePosition]}>
            {report.lesion.lesion_type}
          </Text>
        </View>
      </View>
      <View style={[styles.resultItem1, styles.resultItemLayout]}>
        <View style={[styles.resultItemChild, styles.dnaIconPosition]} />
        <View style={[styles.image, styles.imagePosition]}>
          <View style={styles.imageItem} />
          <Image
            style={[styles.dnaIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/dna.png")}
          />
        </View>
        <View style={[styles.group, styles.textPosition]}>
          <Text style={[styles.cancer, styles.nameTypo]}>Severity</Text>
          <Text style={[styles.type, styles.typePosition]}>
            {report.lesion.lesion_severity}
          </Text>
        </View>
      </View>
      <View style={[styles.resultItem2, styles.resultItemLayout]}>
        <View style={[styles.resultItemChild, styles.dnaIconPosition]} />
        <View style={[styles.image, styles.imagePosition]}>
          <View style={styles.imageInner} />
          <Image
            style={[styles.dnaIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/dna.png")}
          />
        </View>
        <View style={[styles.text1, styles.textPosition]}>
          <Text style={[styles.cancer, styles.nameTypo]}>Accuracy</Text>
          <Text style={[styles.text2, styles.typePosition]}>
            <Text style={styles.text3}>{report.accuracy_score}</Text>
            {/* <Text style={styles.text4}>%</Text> */}
          </Text>
        </View>
      </View>

      <View style={styles.resultItem3}>
        <View style={[styles.resultItemChild, styles.dnaIconPosition]} />
        <View style={[styles.image3, styles.imagePosition]}>
          <View style={styles.imageInner} />
          <Image
            style={[styles.dnaIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/cell.png")}
          />
        </View>
        <View style={[styles.text5, styles.textPosition]}>
          <Text style={[styles.cancer, styles.nameTypo]}>Model Used</Text>
          <Text style={[styles.name, styles.nameTypo]}>
            {report.model.model_name}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resultsTypo: {
    textAlign: "left",
    color: Color.darkText,
    fontSize: FontSize.size_3xl,

    position: "absolute",
  },
  resultItemLayout: {
    height: 93,
    width: 332,
    left: 30,
    position: "absolute",
  },
  dnaIconPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  imagePosition: {
    left: "1.42%",
    bottom: "5.38%",
    right: "75%",
    top: "5.38%",
    width: "23.58%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textPosition: {
    left: "32.38%",
    top: "24.73%",
    position: "absolute",
  },
  nameTypo: {
    fontSize: FontSize.text1_size,
    left: "0%",
    textAlign: "left",

    position: "absolute",
  },
  typePosition: {
    top: "49.06%",
    fontSize: FontSize.text1_size,
    left: "0%",
    color: Color.colorCornflowerblue_100,
    textAlign: "left",
    position: "absolute",
  },
  downloadIconPosition: {
    left: "83.23%",
    right: "7.7%",
    width: "9.08%",
    maxHeight: "100%",
    maxWidth: "100%",
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  reportResultsChild: {
    top: 0,
    left: 70,
    width: 250,
    height: 233,
    position: "absolute",
  },
  reportResultsItem: {
    top: 33,
    left: 92,
    width: 182,
    height: 179,
    position: "absolute",
  },
  microskopIcon: {
    top: 45,
    left: 120,
    width: 150,
    height: 148,
    position: "absolute",
  },
  reportResultsInner: {
    top: 218,
    left: 14,
    borderTopLeftRadius: Border.br_33xl,
    borderTopRightRadius: Border.br_33xl,
    borderBottomRightRadius: Border.br_19xl,
    borderBottomLeftRadius: Border.br_19xl,
    backgroundColor: Color.c0,
    width: 367,
    height: 582,
    position: "absolute",
  },
  finished: {
    top: 233,
    left: 158,
  },
  results: {
    top: 287,
    left: 35,
  },
  giveFeedback: {
    top: 288,
    left: 210,
    fontSize: FontSize.size_xl,
    textAlign: "right",
    color: Color.colorCornflowerblue_100,

    position: "absolute",
  },
  resultItemChild: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.othersWhite,
    position: "absolute",
  },
  imageChild: {
    display: "none",
    backgroundColor: Color.colorCornflowerblue_100,
    borderRadius: Border.br_lgi,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  dnaIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  image: {
    height: "89.25%",
  },
  cancer: {
    color: Color.colorBlack,
    top: "0%",
    fontSize: FontSize.text1_size,
    width: 200,
  },
  type: {},
  text: {
    width: "40.78%",
    right: "26.84%",
    bottom: "18.28%",
    height: "56.99%",
    left: "32.38%",
    top: "24.73%",
  },
  downloadIcon: {
    height: "34.41%",
    top: "34.41%",
    bottom: "31.18%",
  },
  resultItem: {
    top: 346,
  },
  imageItem: {
    backgroundColor: Color.colorCornflowerblue_100,
    borderRadius: Border.br_lgi,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  group: {
    width: "32.27%",
    right: "35.35%",
    bottom: "18.28%",
    height: "56.99%",
    left: "32.38%",
    top: "24.73%",
  },
  downloadIcon1: {
    height: "17.2%",
    width: "4.54%",
    top: "43.01%",
    right: "9.96%",
    bottom: "39.78%",
    left: "85.5%",
  },
  resultItem1: {
    top: 458,
  },
  imageInner: {
    backgroundColor: Color.colorCornflowerblue_200,
    borderRadius: Border.br_lgi,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  text3: {},
  text4: {
    fontFamily: FontFamily.text1,
  },
  text2: {
    opacity: 0.5,
  },
  text1: {
    width: "30.5%",
    right: "37.13%",
    bottom: "18.28%",
    height: "56.99%",
    left: "32.38%",
    top: "24.73%",
  },
  resultItem2: {
    top: 570,
  },
  image3: {
    height: "89.23%",
  },
  name: {
    top: "48.47%",
    color: Color.colorCornflowerblue_100,
  },
  text5: {
    height: "57.58%",
    width: "37.23%",
    right: "30.39%",
    bottom: "17.69%",
    left: "32.38%",
    top: "24.73%",
  },
  downloadIcon3: {
    height: "34.4%",
    top: "34.4%",
    bottom: "31.21%",
  },
  resultItem3: {
    top: 684,
    height: 91,
    width: 332,
    left: 30,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  close: {
    left: 289,
    top: 42,
    width: 63,
    height: 56,
    position: "absolute",
  },
  reportResults: {
    borderRadius: Border.br_19xl,
    backgroundColor: "#658964",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default ReportResults;
