import { View, StyleSheet } from "react-native";
import React from "react";
import theme from "../../theme";
import Text from "../customComponents/Text";
import { format } from "date-fns";

const ReviewItem = ({ review, myReview }) => {
  return (
    <View style={styles.cardContainer}>
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
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    padding: 25,
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
});

export default ReviewItem;
