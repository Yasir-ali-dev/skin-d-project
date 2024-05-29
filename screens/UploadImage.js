import React from "react";
import { StyleSheet, View, Text, Pressable, Button } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import SelectDropdown from "react-native-select-dropdown";
import * as ImagePicker from "expo-image-picker";

const models = ["REZNET", "DL"];
const UploadImage = () => {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = React.useState("");
  const [selectedImage, setSelectedImage] = React.useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result.assets[0].uri);
    setSelectedImage(result.assets[0].uri);
  };

  return (
    <View style={styles.uploadImage}>
      <View style={styles.uploadImageChild}></View>
      <Pressable
        style={styles.continue}
        onPress={() => navigation.navigate("ReportResults")}
      >
        <Text
          style={{
            textAlign: "center",
            width: 140,
            paddingHorizontal: 40,
            paddingTop: 7,
            fontSize: 17,
            color: "white",
          }}
        >
          Submit
        </Text>
      </Pressable>

      <Text
        style={[styles.uploadAPhoto, styles.uploadAPhotoClr]}
      >{`Upload a photo of your Skin Lesion `}</Text>

      <Text style={[styles.systemRequiresYou, styles.frameFlexBox]}>
        System requires you to upload skin image for Cancer Detection. Don't
        worry, your data will stay safe and private.
      </Text>

      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={styles.autoLayoutVertical}>
          <Image
            style={styles.iconlyboldimage}
            contentFit="cover"
            source={require("../assets/iconlyboldimage.png")}
          />
          <Pressable
            style={[styles.selectFile, styles.selectFileTypo]}
            onPress={pickImage}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "600",
                fontSize: 18,
                padding: 7,
              }}
            >
              Select File
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.selectModel}>
        <SelectDropdown
          data={models}
          onSelect={(selectedItem, index) => {
            setSelectedValue(selectedItem);
          }}
          renderButton={(selectedItem, isOpened) => {
            return (
              <View style={STYLE.dropdownButtonStyle}>
                <Text style={STYLE.dropdownButtonTxtStyle}>
                  {(selectedItem && selectedItem) || "Select your Model"}
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
    width: 300,
    height: 50,
    backgroundColor: Color.colorDarkgreen,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
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
export default UploadImage;

const styles = StyleSheet.create({
  uploadAPhotoClr: {
    color: Color.colorDarkgreen,
  },
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  selectFileTypo: {
    lineHeight: 22,
    fontSize: FontSize.bodyLargeMedium_size,
    letterSpacing: 0,
    textAlign: "center",
  },
  uploadImageChild: {
    height: "6.5%",
    width: "75.11%",
    top: "80.75%",
    right: "8.06%",
    bottom: "12.75%",
    left: "12.19%",
    borderRadius: Border.br_36xl,
    backgroundColor: Color.colorForestgreen_200,
    position: "absolute",
  },
  continue1: {
    height: "5.5%",
    width: "35.56%",
    fontSize: FontSize.size_5xl,

    textAlign: "center",
    color: Color.othersWhite,
    fontWeight: "500",
  },
  continue: {
    left: "33.06%",
    top: "81.75%",
    position: "absolute",
  },
  uploadAPhoto: {
    height: "15.88%",
    marginLeft: -147,
    top: "25.88%",
    left: "50%",
    fontSize: 30,
    width: 296,
    textAlign: "center",
    position: "absolute",
  },
  systemRequiresYou: {
    height: "8.13%",
    top: "41.25%",
    left: 51,
    display: "flex",
    width: 293,
    lineHeight: 22,
    fontSize: FontSize.bodyLargeMedium_size,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.colorDarkgreen,
  },
  uploadImageItem: {
    top: 108,
    left: 32,
    borderRadius: 100,
    borderStyle: "solid",
    borderColor: Color.othersWhite,
    borderWidth: 1,
    width: 299,
    height: 67,
    backgroundColor: Color.colorForestgreen_200,
    position: "absolute",
  },
  vectorIcon: {
    height: "1.15%",
    width: "3.83%",
    top: "16.96%",
    right: "18.03%",
    bottom: "81.89%",
    left: "78.14%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconlyboldimage: {
    width: 28,
    height: 28,
  },
  selectFile: {
    alignSelf: "stretch",

    color: Color.greyscale500,
    marginTop: 16,
    fontWeight: "500",
    fontSize: FontSize.bodyLargeMedium_size,
  },
  autoLayoutVertical: {
    alignItems: "center",
    flex: 1,
  },
  frame: {
    top: 443,
    left: 50,
    borderRadius: 32,
    width: 294,
    height: 140,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 32,
    backgroundColor: Color.colorForestgreen_200,
  },
  selectModel: {
    top: 117,
    left: 46,
    fontSize: FontSize.size_xl,
    lineHeight: 28,
    fontWeight: "700",

    letterSpacing: 0,
    textAlign: "center",
    color: Color.othersWhite,
    position: "absolute",
  },
  uploadImage: {
    borderRadius: Border.br_18xl,
    backgroundColor: Color.colorForestgreen_300,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    flex: 1,
  },
});
