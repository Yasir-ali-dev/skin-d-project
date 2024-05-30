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
import * as tf from "@tensorflow/tfjs";
import { fetch, bundleResourceIO } from "@tensorflow/tfjs-react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import * as jpeg from "jpeg-js";

import axios from "axios";
import { uri } from "../url";

const LoginPage = () => {
  const navigation = useNavigation();

  const [isTfReady, setTfReady] = React.useState(false); // gets and sets the Tensorflow.js module loading status
  const [model, setModel] = React.useState(null); // gets and sets the locally saved Tensorflow.js model
  const [image, setImage] = React.useState(null); // gets and sets the image selected from the user
  const [predictions, setPredictions] = React.useState(null); // gets and sets the predicted value from the model
  const [error, setError] = React.useState(false); // gets and sets any errors

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

  useEffect(() => {
    (async () => {
      await tf.ready(); // wait for Tensorflow.js to get ready
      setTfReady(true); // set the state

      // bundle the model files and load the model:
      const model = require("../model.json");
      const weights = require("../weights.bin");
      const loadedModel = await tf.loadGraphModel(
        bundleResourceIO(model, weights)
      );

      setModel(loadedModel); // load the model to the state
      getPermissionAsync(); // get the permission for camera roll access for iOS users
    })();
  }, []);

  async function imageToTensor(source) {
    // load the raw data of the selected image into an array
    const response = await fetch(source.uri, {}, { isBinary: true });
    const rawImageData = await response.arrayBuffer();
    const { width, height, data } = jpeg.decode(rawImageData, {
      useTArray: true, // Uint8Array = true
    });

    // remove the alpha channel:
    const buffer = new Uint8Array(width * height * 3);
    let offset = 0;
    for (let i = 0; i < buffer.length; i += 3) {
      buffer[i] = data[offset];
      buffer[i + 1] = data[offset + 1];
      buffer[i + 2] = data[offset + 2];
      offset += 4;
    }

    // transform image data into a tensor
    const img = tf.tensor3d(buffer, [width, height, 3]);

    // calculate square center crop area
    const shorterSide = Math.min(width, height);
    const startingHeight = (height - shorterSide) / 2;
    const startingWidth = (width - shorterSide) / 2;
    const endingHeight = startingHeight + shorterSide;
    const endingWidth = startingWidth + shorterSide;

    // slice and resize the image
    const sliced_img = img.slice(
      [startingWidth, startingHeight, 0],
      [endingWidth, endingHeight, 3]
    );
    const resized_img = tf.image.resizeBilinear(sliced_img, [224, 224]);

    // add a fourth batch dimension to the tensor
    const expanded_img = resized_img.expandDims(0);

    // normalise the rgb values to -1-+1
    return expanded_img.toFloat().div(tf.scalar(127)).sub(tf.scalar(1));
  }

  async function handlerSelectImage() {
    try {
      let response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true, // on Android user can rotate and crop the selected image; iOS users can only crop
        quality: 1, // go for highest quality possible
        aspect: [4, 3], // maintain aspect ratio of the crop area on Android; on iOS crop area is always a square
      });

      if (!response.cancelled) {
        const source = { uri: response.uri };
        setImage(source); // put image path to the state
        const imageTensor = await imageToTensor(source); // prepare the image
        const predictions = await model.predict(imageTensor); // send the image to the model
        setPredictions(predictions); // put model prediction to the state
      }
    } catch (error) {
      setError(error);
    }
  }

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
        <TouchableOpacity
          onPress={
            model && !predictions // Activates handler only if the model has been loaded and there are no predictions done yet
              ? handlerSelectImage
              : () => {}
          }
        >
          {" "}
          //...
        </TouchableOpacity>
        <Output
          status={status}
          image={image}
          predictions={predictions}
          error={error}
        />
        //... // Output.js: //...
        <Text>{Math.round(predictions.dataSync()[0] * 100) + "%"}</Text>
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
