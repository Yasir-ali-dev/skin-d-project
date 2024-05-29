import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import { Image } from "expo-image";
import { Color } from "../GlobalStyles";
import axios from "axios";
import { home_uri, uri } from "../url";
import { useNavigation } from "@react-navigation/native";

const AddPatient = () => {
  const [formData, setFormData] = React.useState({
    physician_id: "65e0769f7cf00659124913c7",
    name: "",
    age: "",
    gender: "",
    cancer_acquired_date: "",
    email: "",
    phone: "",
    address: "",
    date_of_birth: "",
  });
  const navigation = useNavigation();

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (
      formData.name === "" ||
      formData.gender === "" ||
      formData.phone === "" ||
      formData.age === ""
    ) {
      Alert.alert(
        "Invalid Input",
        "Please enter the required fields, Name, Age, Phone and Age"
      );
      return;
    }
    if (!isValidEmail(formData.email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    if (!isValidPhoneNumber(formData.phone)) {
      Alert.alert(
        "Invalid Phone Number",
        "Please enter a valid 11-digit phone number."
      );
      return;
    }
    if (!isValidDate(formData.date_of_birth)) {
      Alert.alert(
        "Invalid Date Of Birth",
        "Please enter a valid date in the format 00/00/0000"
      );
    }
    if (!isValidDate(formData.cancer_acquired_date)) {
      Alert.alert(
        "Invalid Cancer Acquired Date",
        "Please enter a valid date in the format 00/00/0000"
      );
    }
    let response;
    try {
      response = await axios.post(`${uri}/patients`, JSON.stringify(formData), {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.data) {
        throw new Error("No response data received");
      }
    } catch (error) {
      console.error(error.message);
    }
    setFormData({
      physician_id: "65e0769f7cf00659124913c7",
      name: "",
      age: "",
      gender: "",
      cancer_acquired_date: "",
      email: "",
      phone: "",
      address: "",
      date_of_birth: "",
    });
    Alert.alert("Patient Is Created Successfully", `${formData.name}`);
    console.log(response.data.patient);
    const pat = response.data.patient;
    setTimeout(() => {
      navigation.navigate("PatientDetails", { patient: pat });
    }, 2000);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{11}$/;
    return phoneRegex.test(phoneNumber);
  };

  const isValidDate = (date) => {
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    // console.log(dateRegex.test(date));
    return dateRegex.test(date);
  };

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
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 5,
        }}
      >
        <View>
          <Image
            contentFit="cover"
            style={{
              width: 70,
              height: 70,
            }}
            source={require("../assets/patientremovebgpreview-1.png")}
            alt="photo"
          />
          <Text>Add Patient</Text>
        </View>

        <View style={{ gap: 5 }}>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 15, marginBottom: 2, paddingRight: 2 }}>
                Name{" "}
              </Text>
              <Text style={{ color: "red" }}> *</Text>
            </View>
            <TextInput
              style={STYLE.box}
              value={formData.name}
              onChangeText={(text) => handleChange("name", text)}
              placeholder="Enter Patient Name"
            />
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 15, marginBottom: 2, paddingRight: 2 }}>
                Age
              </Text>
              <Text style={{ color: "red" }}> *</Text>
            </View>
            <TextInput
              keyboardType="numeric"
              style={STYLE.box}
              value={formData.age}
              onChangeText={(text) => handleChange("age", text)}
              placeholder="Enter Patient Age"
            />
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 15, marginBottom: 2, paddingRight: 2 }}>
                Gender
              </Text>
              <Text style={{ color: "red" }}> *</Text>
            </View>

            <TextInput
              style={STYLE.box}
              value={formData.gender}
              onChangeText={(text) => handleChange("gender", text)}
              placeholder="Enter Patient Gender"
            />
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 15, marginBottom: 2, paddingRight: 2 }}>
                Phone
              </Text>
              <Text style={{ color: "red" }}> *</Text>
            </View>
            <TextInput
              style={STYLE.box}
              value={formData.phone}
              onChangeText={(text) => handleChange("phone", text)}
              placeholder="Enter Patient Phone Number"
              keyboardType="phone-pad"
            />
          </View>
          <View>
            <Text style={{ fontSize: 15, marginBottom: 2 }}>Email</Text>
            <TextInput
              style={STYLE.box}
              value={formData.email}
              onChangeText={(text) => handleChange("email", text)}
              placeholder="Enter Patient Email"
              keyboardType="email-address"
            />
          </View>
          <View>
            <Text style={{ fontSize: 15, marginBottom: 2 }}>
              Cancer Acquired Date
            </Text>
            <TextInput
              style={STYLE.box}
              value={formData.cancer_acquired_date}
              onChangeText={(text) =>
                handleChange("cancer_acquired_date", text)
              }
              placeholder="Enter Cancer Detection Date"
            />
            <Text
              style={{
                color: "green",
                paddingLeft: 3,
                paddingBottom: 5,
              }}
            >
              eg: 00/00/0000
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15, marginBottom: 2 }}>Date of Birth</Text>
            <TextInput
              style={STYLE.box}
              value={formData.date_of_birth}
              onChangeText={(text) => handleChange("date_of_birth", text)}
              placeholder="Enter Date of Birth"
            />
            <Text
              style={{
                color: "green",
                paddingLeft: 3,
                paddingBottom: 5,
              }}
            >
              eg: 00/00/0000
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15, marginBottom: 2 }}>Address</Text>
            <TextInput
              style={STYLE.box}
              value={formData.address}
              onChangeText={(text) => handleChange("address", text)}
              placeholder="Enter Address"
            />
          </View>
          <View>
            <Pressable
              onPress={handleSubmit}
              style={{
                backgroundColor: Color.colorForestgreen_200,
                padding: 10,
                borderRadius: 5,
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Add Patient
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    elevation: 5, // Set elevation to ensure it appears above other components
  },
});
const STYLE = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  box: {
    height: 35,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  addPatientItem: {
    height: "5.26%",
    top: "4%",
    right: "0%",
    bottom: "94.74%",
    left: "0%",
    backgroundColor: Color.colorForestgreen_200,
    position: "absolute",
    width: "100%",
  },
});

export default AddPatient;
