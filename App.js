const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LoginPage from "./screens/LoginPage";
import Dashboard from "./screens/Dashboard";
import UploadImage from "./screens/UploadImage";
import ReportResults from "./screens/ReportResults";
import AddPatient from "./screens/AddPatient";
import Patients from "./screens/Patients";
import FAQ from "./screens/FAQ";
import Feedback from "./screens/Feedback";
import PatientList from "./screens/PatientList";
import PatientDetails from "./screens/PatientDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ResultSummary from "./screens/ResultSummary";
import EducationResource from "./screens/EducationResource";
import ReportList from "./screens/ReportList";
import AllFeedbacks from "./screens/AllFeedbacks";
import FeedbackDetails from "./screens/FeedbackDetails";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  // const [fontsLoaded, error] = useFonts({
  //   "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  //   "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
  //   "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  //   "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  //   "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
  //   "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
  //   "Mitr-Light": require("./assets/fonts/Mitr-Light.ttf"),
  //   "Urbanist-Medium": require("./assets/fonts/Urbanist-Medium.ttf"),
  //   "WorkSans-Regular": require("./assets/fonts/WorkSans-Regular.ttf"),
  // });

  // if (!fontsLoaded && !error) {
  //   return null;
  // }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="LoginPage"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{
                headerShown: false,
                gestureEnabled: false,
                gestureDirection: "vertical",
              }}
            />
            <Stack.Screen
              name="ResultSummary"
              component={ResultSummary}
              options={{
                headerShown: true,
                title: "Physician Result Summary",
                headerTintColor: "white",
                headerStyle: {
                  backgroundColor: "green",
                },
              }}
            />
            <Stack.Screen
              name="ReportList"
              component={ReportList}
              options={{
                headerShown: true,
                title: "Reports",
                headerTintColor: "white",
                headerStyle: {
                  backgroundColor: "green",
                },
              }}
            />
            <Stack.Screen
              name="Feedback"
              component={Feedback}
              options={{
                headerShown: true,
                title: "Feedback",
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerStyle: {
                  backgroundColor: "green",
                },
              }}
            />
            <Stack.Screen
              name="PatientDetails"
              component={PatientDetails}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="FeedbackDetails"
              component={FeedbackDetails}
              options={{
                headerShown: true,
                title: "Feedback",
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerStyle: {
                  backgroundColor: "green",
                },
              }}
            />
            <Stack.Screen
              name="AllFeedbacks"
              component={AllFeedbacks}
              options={{
                headerShown: true,
                title: "Feedbacks",
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerStyle: {
                  backgroundColor: "green",
                },
              }}
            />
            <Stack.Screen
              name="FAQPage"
              component={FAQ}
              options={{
                headerShown: true,
                title: "FAQ",
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerStyle: {
                  backgroundColor: "green",
                },
              }}
            />
            <Stack.Screen
              name="EducationResource"
              component={EducationResource}
              options={{
                headerShown: true,
                title: "Educational Resources",
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerStyle: {
                  backgroundColor: "green",
                },
              }}
            />
            <Stack.Screen
              name="Patients"
              component={PatientList}
              options={{
                headerShown: true,
                title: "Patients",
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerStyle: {
                  backgroundColor: "green",
                },
              }}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{
                headerShown: false,
                gestureEnabled: false,
                gestureDirection: "vertical",
              }}
            />
            <Stack.Screen
              name="UploadImage"
              component={UploadImage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReportResults"
              component={ReportResults}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddPatient"
              component={AddPatient}
              options={{
                headerShown: true,
                title: "Add Patient",
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerStyle: {
                  backgroundColor: "green",
                },
              }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
