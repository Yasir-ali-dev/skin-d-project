import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import axios from "axios";
import { uri } from "../url";

const LoginPage = () => {
  const navigation = useNavigation();
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (name, value) => {
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    if (!isValidEmail(credentials.email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }
    if (credentials.password.length < 5) {
      Alert.alert("Invalid Password", "password should be atleast 5 character");
      return;
    }
    try {
      const response = await axios.post(
        `${uri}/auth/login`,
        JSON.stringify(credentials),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.data) {
        throw new Error("No response data received");
      }
      Alert.alert(
        "Physician is login Successfully",
        `${response.data.user.email}`
      );

      setTimeout(() => {
        navigation.navigate("Dashboard", { user: response.data.user });
      }, 1000);
    } catch (error) {
      console.log(error.message);
      Alert.alert("Error", `${JSON.stringify(error.response.data.message)}`);
    }
  };

  const getData = async () => {
    console.log("Fdfs");
    try {
      const response = await fetch(`http://10.102.139.57:3002/`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(Object.keys(data));
    } catch (error) {
      console.log(Object.keys(error));
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={false}
      contentContainerStyle={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <View style={styles.loginPage}>
        <View style={[styles.loginPageChild, styles.loginShadowBox]} />
        <View style={[styles.loginPageItem, styles.loginShadowBox]} />
        <TextInput
          style={[styles.username, styles.usernameTypo]}
          onChangeText={(text) => handleChange("email", text)}
          placeholder="Enter email"
        />
        <TextInput
          style={[styles.password, styles.usernameTypo]}
          onChangeText={(text) => handleChange("password", text)}
          placeholder="Enter password"
          secureTextEntry={true}
        />
        <Text style={[styles.loginToYour, styles.welcomeClr]}>
          Login to your account
        </Text>
        <Text style={[styles.rememberMe, styles.rememberMeTypo]}>
          Remember me
        </Text>

        <TouchableOpacity
          style={[
            styles.login,
            {
              backgroundColor: "#38903B",
              paddingHorizontal: 133,
              paddingVertical: 10,
              borderRadius: 10,
            },
          ]}
          onPress={() => handleSubmit()}
        >
          <Text>Login</Text>
        </TouchableOpacity>

        <Text style={[styles.dontHaveAnContainer, styles.welcomeClr]}>
          <Text style={styles.dontHaveAnTypo}>{`Don't have an account? `}</Text>
          <Text style={styles.login1Typo}>Register</Text>
        </Text>
        <Text style={[styles.welcome, styles.welcomeClr]}>{`Welcome `}</Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={styles.logoIcon}
          contentFit="cover"
          source={require("../assets/logo.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <View style={styles.rectangleView} />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loginShadowBox: {
    backgroundColor: Color.colorForestgreen_100,
    borderRadius: Border.br_smi,
    left: "11.17%",
    right: "11.39%",
    width: "77.44%",
    height: "7.44%",
    position: "absolute",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  usernameTypo: {
    textAlign: "left",
    color: Color.othersWhite,
    left: "25%",
    height: "6.13%",

    fontSize: FontSize.bodyLargeMedium_size,
    position: "absolute",
    paddingVertical: 10,
    // paddingHorizontal: -5,
  },
  welcomeClr: {
    color: Color.colorDarkgreen,
    textAlign: "left",
    position: "absolute",
  },
  rememberMeTypo: {
    fontSize: FontSize.size_sm,
    top: "63.25%",
    height: "4.5%",
    color: Color.colorDarkgreen,

    fontWeight: "300",
    textAlign: "left",
    position: "absolute",
  },
  login1Typo: {
    fontWeight: "500",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  loginPageChild: {
    top: "46.81%",
    bottom: "46.75%",
  },
  loginPageItem: {
    top: "55.33%",
    bottom: "39.24%",
  },
  username: {
    width: "35%",
    top: "47.95%",
  },
  password: {
    width: "30.83%",
    top: "56.25%",
  },
  loginToYour: {
    height: "3.38%",
    width: "62.22%",
    top: "39%",
    left: "25.28%",
    fontSize: FontSize.text1_size,

    fontWeight: "300",
  },
  forgetPassword: {
    width: "34.17%",
    left: "57.5%",
  },
  rememberMe: {
    width: "30.28%",
    left: "17.5%",
  },
  loginPageInner: {
    top: "83.38%",
    right: "11.17%",
    bottom: "10.19%",
    left: "11.39%",
    borderRadius: Border.br_36xl,
    backgroundColor: Color.colorForestgreen_200,
    width: "77.44%",
    height: "6.44%",
    position: "absolute",
  },
  login1: {
    width: "23.06%",
    fontSize: FontSize.size_5xl,
    height: "2.5%",

    fontWeight: "500",
    textAlign: "center",
    color: Color.colorBlack,
  },
  login: {
    left: "11.56%",
    top: "84.5%",
    position: "absolute",
  },
  dontHaveAnTypo: {
    fontWeight: "300",
  },
  dontHaveAnContainer: {
    height: "3.75%",
    width: "76.67%",
    top: "92.13%",
    left: "13.61%",
    fontSize: FontSize.bodyLargeMedium_size,
    color: Color.colorDarkgreen,
  },
  welcome: {
    height: "8.5%",
    width: "71.67%",
    top: "29.13%",
    left: "19.72%",
    fontSize: 50,

    color: Color.colorDarkgreen,
  },
  vectorIcon: {
    width: "5.81%",
    top: "49.14%",
    right: "79.56%",
    bottom: "48.58%",
    left: "14.64%",
    height: "2.69%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  logoIcon: {
    top: 45,
    left: 50,
    width: 274,
    height: 180,
    position: "absolute",
  },
  vectorIcon1: {
    width: "5.08%",
    top: "57.70%",
    right: "80.28%",
    bottom: "41.16%",
    left: "14.64%",
    height: "2.69%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  rectangleView: {
    top: 510,
    left: 46,
    backgroundColor: Color.othersWhite,
    width: 11,
    height: 11,
    position: "absolute",
  },
  vectorIcon2: {
    height: "0.54%",
    width: "1.64%",
    top: "64.1%",
    right: "84.83%",
    bottom: "36.75%",
    left: "12.23%",
  },
  loginPage: {
    borderRadius: Border.br_18xl,
    backgroundColor: Color.colorForestgreen_300,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default LoginPage;
