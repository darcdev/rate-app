import { View, StyleSheet, Pressable } from "react-native";
import * as Linking from "expo-linking";
import React from "react";
import theme from "../../theme";
import Text from "../customComponents/Text";
import { format } from "date-fns";

const ReviewItem = ({ review, myReview }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.informationContainer}>
        <View>
          <View style={styles.ratingContainer}>
            <Text
              fontSize="subheading"
              fontWeight="bold"
              style={styles.ratingText}
            >
              {review.rating}
            </Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text
            style={styles.reviewUsername}
            fontWeight="bold"
            fontSize="subheading"
          >
            {myReview ? review.repository.fullName : review.user.username}
          </Text>
          <Text style={styles.reviewDate} color="textSecondary">
            {format(new Date(review.createdAt), "dd.MM.yyyy")}
          </Text>
          <Text style={styles.reviewText}>{review.text}</Text>
        </View>
      </View>
      {myReview && (
        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.buttonAction, styles.viewRepository]}
            onPress={() => Linking.openURL(review.repository.url)}
          >
            <Text fontWeight="bold" style={styles.labelSubmit}>
              View Repository
            </Text>
          </Pressable>
          <Pressable style={[styles.buttonAction, styles.deleteReview]}>
            <Text fontWeight="bold" style={styles.labelSubmit}>
              Delete Review
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    padding: 20,
    flexDirection: "column",
  },
  informationContainer: {
    flexDirection: "row",
  },
  ratingContainer: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: theme.bg.primary,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ratingText: {
    color: "#0366d6",
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 20,
  },
  reviewText: {
    textAlign: "justify",
  },
  reviewUsername: {
    marginBottom: 5,
  },
  reviewDate: {
    marginBottom: 15,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonAction: {
    padding: 15,
    borderRadius: 5,
    flex: 1,
  },
  viewRepository: {
    backgroundColor: theme.bg.primary,
    marginRight: 2.5,
  },
  deleteReview: {
    backgroundColor: theme.bg.secondary,
    marginLeft: 2.5,
  },
  labelSubmit: {
    color: theme.colors.textWhite,
    textAlign: "center",
  },
});

export default ReviewItem;
