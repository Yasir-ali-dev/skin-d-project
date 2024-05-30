import * as React from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import SelectDropdown from "react-native-select-dropdown";
import { home_uri, uri } from "../url";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const models = ["-ve", "+ve"];
const Feedback = () => {
  const [selectedValue, setSelectedValue] = React.useState("");
  const navigation = useNavigation();
  const [feedback, setFeedback] = React.useState({
    report_id: "66049786635f061c7b17607d",
    feedback_type: "",
    feedback_details: "",
    lesion_location: "",
    lesion_size: "",
    lesion_color: "",
    lesion_texture: "",
  });
  const handleChange = (name, value) => {
    setFeedback({
      ...feedback,
      [name]: value,
    });
  };
  // set it not settled
  const handleSubmit = async () => {
    if (
      feedback.feedback_type === "" ||
      feedback.feedback_details === "" ||
      feedback.lesion_location === "" ||
      feedback.feedback_type === "" ||
      feedback.lesion_color === "" ||
      feedback.lesion_size === "" ||
      feedback.lesion_texture === ""
    ) {
      Alert.alert(
        "Field Is Required",
        "please fill the required fields, all fields are required!"
      );
      return;
    }
    try {
      const response = await axios.post(
        `${uri}/feedbacks`,
        JSON.stringify(feedback),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.data) {
        throw new Error("No response data received");
      }
      setFeedback({
        feedback_type: "",
        feedback_details: "",
        lesion_location: "",
        lesion_size: "",
        lesion_color: "",
        lesion_texture: "",
      });

      Alert.alert(
        "Feedback Is Created Successfully",
        `${response.data.new_feedback._id}`
      );
      const feed = response.data.new_feedback;
      setTimeout(() => {
        navigation.navigate("FeedbackDetails", { feedback, feed });
      }, 2000);
    } catch (error) {
      console.error(error.message);
      Alert.alert("Error", `${JSON.stringify(error.response.data.message)}`);
    }
  };

  return (
    <View style={styles.feedback}>
      <View style={styles.nameField}>
        <Text style={[styles.patientName, styles.feedBackTypo]}>
          Give Feedback
        </Text>
      </View>
      <View style={[styles.lesioncolorField, styles.fieldLayout1]}>
        <Text style={[styles.lesionColor, styles.lesionTypo]}>
          Lesion Color
        </Text>
        <TextInput
          style={[styles.lesioncolorFieldChild, styles.fieldChildShadowBox1]}
          placeholder=" Lesion Color"
          onChangeText={(text) => handleChange("lesion_color", text)}
        />
      </View>
      <View style={[styles.lesionlocationField, styles.fieldLayout]}>
        <Text style={[styles.lesionLocation, styles.lesionTypo]}>
          Lesion Location
        </Text>
        <TextInput
          style={[styles.lesionlocationFieldChild, styles.fieldChildShadowBox]}
          placeholder=" Lesion Location"
          onChangeText={(text) => handleChange("lesion_location", text)}
        />
      </View>
      <View style={[styles.lesionsizeField, styles.fieldPosition]}>
        <Text style={[styles.lesionLocation, styles.lesionTypo]}>
          Lesion Size
        </Text>
        <TextInput
          style={[styles.lesionsizeFieldChild, styles.fieldChildShadowBox]}
          placeholder=" Lesion Size"
          onChangeText={(text) => handleChange("lesion_size", text)}
        />
      </View>
      <View style={[styles.lesiontextureField, styles.severityLayout]}>
        <Text style={[styles.lesionTexture, styles.lesionTypo]}>
          Lesion Texture
        </Text>
        <TextInput
          style={[styles.lesiontextureFieldChild, styles.fieldChildShadowBox]}
          placeholder=" Lesion Texture"
          onChangeText={(text) => handleChange("lesion_texture", text)}
        />
      </View>

      <View style={[styles.lesiontypeField, styles.fieldLayout]}>
        <Text style={[styles.lesionType, styles.lesionTypo]}>Lesion Type</Text>
        <SelectDropdown
          data={models}
          onSelect={(selectedItem, index) => {
            setSelectedValue(selectedItem);
            setFeedback({
              ...feedback,
              ["feedback_type"]: selectedItem,
            });
          }}
          renderButton={(selectedItem, isOpened) => {
            return (
              <View style={STYLE.dropdownButtonStyle}>
                <Text style={STYLE.dropdownButtonTxtStyle}>
                  {(selectedItem && selectedItem) || "Select Feedback Type"}
                </Text>
              </View>
            );
          }}
          renderItem={(item, index, isSelected) => {
            return (
              <View
                style={{
                  ...STYLE.dropdownItemStyle,
                  ...(isSelected && { backgroundColor: "#D2D9DF" }),
                }}
              >
                <Text style={STYLE.dropdownItemTxtStyle}>{item}</Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          dropdownStyle={STYLE.dropdownMenuStyle}
        ></SelectDropdown>
      </View>

      <View style={[styles.feedbackField, styles.fieldPosition]}>
        <TextInput
          style={[styles.feedbackFieldChild, styles.fieldChildShadowBox2]}
          multiline={true}
          onChangeText={(text) => handleChange("feedback_details", text)}
        />
        <Text style={[styles.feedBack, styles.feedBackTypo]}>Feed back</Text>
      </View>
      <View
        style={{
          top: 610,
          left: 140,
          fontSize: 20,
          color: Color.colorWhite,
          position: "absolute",
        }}
      >
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "#38903B", borderRadius: 5 },
          ]} // Set background color
          onPress={() => handleSubmit()}
        >
          <Text
            style={{
              paddingHorizontal: 30,
              paddingVertical: 10,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
      {/* <Text style={[styles.feedback1, styles.addTypo]}>FeedBack</Text> */}
    </View>
  );
};

const STYLE = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  dropdownButtonStyle: {
    width: 307,
    height: 35,
    top: 20,
    backgroundColor: Color.colorDarkgreen,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
    color: "white",
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  uploadAPhotoClr: {
    color: Color.colorDarkgreen,
  },
});

const styles = StyleSheet.create({
  btn: {
    fontSize: FontSize.size_3xl,
    paddingHorizontal: 12,
    color: Color.colorDarkgreen,
  },
  feedBackTypo: {
    alignItems: "flex-start",
    display: "flex",
    textAlign: "left",
    color: Color.colorDarkgreen,

    fontWeight: "700",
    textTransform: "capitalize",
    fontSize: 15,
    position: "absolute",
  },
  fieldChildShadowBox2: {
    borderWidth: 1,
    borderColor: "#38903B",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.11)",
    borderRadius: 7,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    padding: 5,
  },
  fieldLayout1: {
    height: 50,
    left: 40,
  },
  lesionTypo: {
    height: 16,
    top: 0,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,

    fontWeight: "700",
    textTransform: "capitalize",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  fieldChildShadowBox1: {
    height: 31,
    top: 19,
    borderWidth: 1,
    borderColor: "#38903B",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.11)",
    borderRadius: 7,
    left: 0,
    backgroundColor: Color.colorWhite,
    padding: 5,
  },
  fieldLayout: {
    height: 49,
    width: 307,
  },
  fieldChildShadowBox: {
    height: 30,
    width: 307,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray,
    borderStyle: "solid",
    borderColor: "#38903B",
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.11)",
    borderRadius: 7,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    padding: 5,
  },
  fieldPosition: {
    left: 40,
    position: "absolute",
  },
  severityLayout: {
    width: 307,
    position: "absolute",
  },
  addTypo: {
    textAlign: "center",

    fontWeight: "700",
    textTransform: "capitalize",
    position: "absolute",
  },
  patientName: {
    top: 6,
    width: 120,
    height: 20,
    left: 9,
  },
  nameFieldChild: {
    left: 129,
    width: 182,
    top: 0,
    height: 35,
  },
  nameField: {
    top: 20,
    left: 34,
    width: 294,
    height: 26,
    position: "absolute",
  },
  lesionColor: {
    width: 127,
    left: 3,
  },
  lesioncolorFieldChild: {
    width: 306,
    position: "absolute",
  },
  lesioncolorField: {
    top: 80,
    width: 306,
    position: "absolute",
  },
  lesionLocation: {
    width: 109,
    left: 3,
  },
  lesionlocationFieldChild: {
    top: 19,
    height: 30,
  },
  lesionlocationField: {
    top: 150,
    left: 40,
    height: 49,
    position: "absolute",
  },
  lesionsizeFieldChild: {
    top: 19,
    height: 30,
  },
  lesionsizeField: {
    top: 220,
    height: 49,
    width: 307,
  },
  lesionTexture: {
    left: 1,
    width: 121,
  },
  lesiontextureFieldChild: {
    top: 20,
  },
  lesiontextureField: {
    top: 290,
    height: 50,
    left: 40,
  },
  lesionType: {
    width: 112,
    left: 0,
  },
  lesiontypeFieldChild: {
    top: 19,
    height: 30,
  },
  lesiontypeField: {
    top: 360,
    left: 40,
    height: 49,
    position: "absolute",
  },
  severity: {
    width: 105,
    left: 0,
  },
  severityFieldChild: {
    height: 31,
    top: 19,
    borderWidth: 1,
    borderColor: "#38903B",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },

    shadowColor: "rgba(0, 0, 0, 0.11)",
    borderRadius: 7,
    left: 0,
    backgroundColor: Color.colorWhite,
    padding: 5,
  },
  severityField: {
    top: 493,
    height: 50,
    left: 40,
  },
  feedbackFieldChild: {
    top: 20,
    height: 119,
    width: 306,
    left: 0,
  },
  feedBack: {
    width: 118,
    height: 43,
    left: 3,
    top: 0,
  },
  feedbackField: {
    top: 440,
    height: 156,
    width: 306,
  },
  feedbackChild: {
    height: "4.88%",
    width: "48.33%",
    top: "89.88%",
    right: "24.17%",
    bottom: "5.25%",
    left: "27.5%",
    borderRadius: 55,
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  add: {
    top: 724,
    left: 159,
    fontSize: 20,
    color: Color.colorWhite,
  },
  feedback1: {
    top: 55,
    left: 117,
    fontSize: 24,
    color: "#38903B",
    width: 161,
    height: 35,
  },
  feedback: {
    borderRadius: 30,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Feedback;
