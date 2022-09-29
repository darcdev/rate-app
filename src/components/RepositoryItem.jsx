import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headCard}>
        <Image
          style={styles.avatarCard}
          source={{ uri: item.ownerAvatarUrl }}
        />
        <View style={styles.header}>
          <Text style={{ fontWeight: "bold" }}>{item.fullName}</Text>
          <Text
            style={{
              color: "gray",
              marginTop: 15,
            }}
          >
            {item.description}
          </Text>
          <View style={styles.badge}>
            <Text
              style={{
                color: "white",
              }}
            >
              {item.language}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.statistics}>
        <View style={styles.statisticItem}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              {item.stargazersCount}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "gray" }}>Stars</Text>
          </View>
        </View>
        <View style={styles.statisticItem}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              {item.forksCount}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "gray" }}>Forks</Text>
          </View>
        </View>
        <View style={styles.statisticItem}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              {item.reviewCount}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "gray" }}>Reviews</Text>
          </View>
        </View>
        <View style={styles.statisticItem}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              {item.ratingAverage}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "gray" }}>Rating</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    padding: 25,
  },
  headCard: {
    flexDirection: "row",
  },
  avatarCard: {
    width: 55,
    height: 55,
    borderRadius: 5,
    marginRight: 20,
  },
  header: { flex: 1 },
  badge: {
    backgroundColor: "#0366d6",
    marginTop: 15,
    padding: 5,
    borderRadius: 5,
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  statistics: {
    flexDirection: "row",
    paddingHorizontal: 30,
    marginTop: 20,
    justifyContent: "space-between",
  },
  statisticItem: {},
});

export default RepositoryItem;
