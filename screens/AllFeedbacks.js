import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";
import { uri } from "../url";

import { useNavigation } from "@react-navigation/native";
const AllFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const navigation = useNavigation();
  const getData = async () => {
    try {
      const response = await fetch(`${uri}/feedbacks`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setFeedbacks(data.all_feedbacks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const screenWidth = Dimensions.get("window").width;
  const itemWidth = (screenWidth - 40) / 2; // Considering 20px margin on each side

  return (
    <View style={styles.feedbackList}>
      <ScrollView
        style={styles.feedbackListInner}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.row}>
          {feedbacks.map((feedback) => (
            <View
              key={feedback._id}
              style={[styles.itemContainer, { width: itemWidth }]}
            >
              <Pressable
                onPress={() =>
                  navigation.navigate("FeedbackDetails", { feedback, feedback })
                }
              >
                <View style={styles.feedbackBox}>
                  <View style={styles.logoContainer}>
                    <Image
                      style={styles.logoImage}
                      source={require("../assets/feedback_icon.png")}
                    />
                  </View>
                  <Text style={styles.nameText}>{feedback.name}</Text>
                  <Text style={styles.idText}>{"ID: " + feedback._id}</Text>
                </View>
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  feedbackList: {
    flex: 1,
    backgroundColor: "#F3F8FF",
    paddingTop: 2,
    paddingHorizontal: 13,
  },

  topbar: {
    marginLeft: -185,
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
    height: 125,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    flex: 1,
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

  feedbackListTitle: {
    top: "60%",
    left: 69,
    fontSize: 20,
    color: Color.cOLORESWhite,
    textAlign: "left",
    position: "absolute",
  },
  // backIcon: {
  //   width: 24,
  //   height: 24,
  //   tintColor: Color.colorWhitesmoke,
  //   position: 'absolute',
  // },
  feedbackListInner: {
    flex: 1,
    top: 0,
  },
  contentContainer: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'space-between',
    // paddingHorizontal: 5,
    // marginTop: 120,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 18,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  itemContainer: {
    width: "48%", // 2% gap between items
    marginBottom: 16,
  },
  feedbackBox: {
    backgroundColor: "#F4F4F4",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
  },
  logoContainer: {
    marginBottom: 8,
  },
  logoImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  nameText: {
    fontSize: FontSize.size_sm,

    textAlign: "center", // Center the text
  },
  idText: {
    fontSize: FontSize.size_xs,
    color: "#666",
    textAlign: "center", // Center the text
  },
});

export default AllFeedbacks;
