import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";
import { TouchableOpacity, Linking } from "react-native";

const EducationResource = () => {
  return (
    <View style={styles.educationresource}>
      <Text
        style={[styles.informationAboutSkin, styles.educationResourcesClr]}
      >{`Information About Skin Cancer & DermDetect`}</Text>
      <Text
        style={[styles.skinCancerIs, styles.whatIsTheTypo]}
      >{`Skin cancer is the out of control growth of abnormal cells in the epidermis, the outermost skin layer, caused by unrepaired DNA damage that triggers mutations. These mutations lead the skin cells to multiply rapidly and form malignant tumors. Traditional methods of diagnosis can be subjective and lead to delays in treatment. DermDetect aims to develop a deep learning-powered skin cancer detection system to provide dermatologists with a reliable tool for accurate diagnosis.

Here You can check further information:
        `}</Text>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL("https://www.iarc.who.int/cancer-type/skin-cancer/")
        }
      >
        <Text style={[styles.link1]}>
          https://www.iarc.who.int/cancer-type/skin-cancer/
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL("https://www.skincancer.org/skin-cancer-information/")
        }
      >
        <Text style={[styles.link2]}>
          https://www.skincancer.org/skin-cancer-information/
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icroundArrowBackIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  educationResourcesClr: {
    color: Color.colorBlack,
    position: "absolute",
  },
  whatIsTheTypo: {
    fontSize: FontSize.size_sm,
    color: Color.colorGray,
  },
  educationresourceChild: {
    top: 0,
    left: 0,
    backgroundColor: "#429924",
    width: 430,
    height: 130,
    position: "absolute",
  },
  icroundArrowBackIcon: {
    height: "2.58%",
    width: "5.58%",
    top: "8.59%",
    right: "88.83%",
    bottom: "88.84%",
    left: "5.58%",
  },
  educationResources: {
    height: "3.5%",
    width: "82.5%",
    top: "7.88%",
    left: "15.56%",
    fontSize: 20,
    fontWeight: "600",

    textAlign: "left",
  },
  informationAboutSkin: {
    height: "10.8%",
    width: "78.06%",
    top: "2.63%",
    left: "11.11%",
    fontSize: 16,
    fontWeight: "500",

    fontSize: 20,
    textAlign: "center",
  },

  whatIsThe: {
    width: 574,
    marginTop: 16,
    display: "none",
    textAlign: "left",
  },

  skinCancerIs: {
    top: 111,
    left: 41,
    textAlign: "justify",
    width: 295,
    position: "absolute",
  },

  educationresource: {
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    borderRadius: 30,
    backgroundColor: "#fffcfc",
    width: "100%",
    height: 800,
    overflow: "hidden",
    flex: 1,
  },

  link1: {
    color: "blue",
    textDecorationLine: "underline",
    marginTop: 10,
    top: 420,
    left: 41,
    width: 295,
    position: "absolute",
  },

  link2: {
    color: "blue",
    textDecorationLine: "underline",
    marginTop: 10,
    top: 470,
    left: 41,
    width: 295,
    position: "absolute",
  },
});

export default EducationResource;
