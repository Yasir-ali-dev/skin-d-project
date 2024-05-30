import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/core";

const ProfileContainer = ({ user }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.topFrame}>
      <View style={styles.nameFrame}>
        <Image
          style={styles.docIconDoctorIconPediatric}
          contentFit="cover"
          source={require("../assets/docicondoctoriconpediatricianiconlogocirclesymbolanimationpngclipartremovebgpreview-1.png")}
        />
        <Text style={styles.dilshadHussain92}>{`${user.email}`}</Text>
      </View>
      <View style={[styles.ellipseParent, styles.groupChildLayout]}>
        <Pressable onPress={() => navigation.navigate("FAQPage")}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-5.png")}
          />
          <Text style={[styles.text, styles.textClr]}>?</Text>
          <Text style={[styles.help, styles.textClr]}>Help</Text>
        </Pressable>
      </View>
      <View style={styles.helpFrame} />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    width: 65,
    height: 65,
  },
  textClr: {
    color: Color.secondarySRedLight,
    textAlign: "center",
    position: "absolute",
  },
  docIconDoctorIconPediatric: {
    width: 43,
    height: 47,
  },
  dilshadHussain92: {
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    width: 170,
    marginLeft: 0,
    textAlign: "center",
  },
  nameFrame: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorFuchsia,
    width: 265,
    alignItems: "center",
    paddingLeft: Padding.p_7xs,
    paddingTop: Padding.p_7xs,
    paddingRight: Padding.p_xs,
    paddingBottom: Padding.p_7xs,
    height: 60,
    flexDirection: "row",
  },
  groupChild: {
    top: 0,
    left: 0,
    opacity: 0.05,
    position: "absolute",
    width: 70,
  },
  text: {
    top: 3,
    left: 25,
    fontSize: FontSize.size_5xl,
    letterSpacing: 2.4,
    width: 20,
    height: 30,
    color: Color.secondarySRedLight,
  },
  help: {
    top: 38,
    left: 20,
    fontSize: FontSize.size_3xs,
    letterSpacing: 1,
    lineHeight: 10,
    fontWeight: "300",
    width: 29,
    height: 12,
  },
  ellipseParent: {
    marginLeft: 20,
  },
  helpFrame: {
    width: 66,
    marginLeft: 100,
    height: 76,
  },
  topFrame: {
    top: 81,
    left: 22,
    width: 334,
    flexDirection: "row",
    height: 66,
    position: "absolute",
  },
});

export default ProfileContainer;
