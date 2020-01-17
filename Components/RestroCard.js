import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

class RestroCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.imgBox}>
          <Image style={styles.foodImage} source={this.props.imgUri} />
        </View>
        <View style={styles.detailSection}>
          <View style={styles.nameRatingWrapper}>
            <View style={styles.nameStrip}>
              <Text style={styles.name}>{this.props.name}</Text>
            </View>
            <View style={styles.ratingStrip}>
              <Image
                style={styles.ratingStarImg}
                source={require("../Images/rating.jpg")}
              />
              {/* <Text style={styles.rating}>{this.props.reviews} Reviews</Text> */}
            </View>
          </View>
          <View style={styles.distanceWrapper}>
            <View style={styles.nameStrip}>
              <Text style={styles.rating}>{this.props.cusions}</Text>
            </View>
            <View style={styles.ratingStrip}>
              <Text style={styles.rating}>{this.props.distance} Km</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    width: "100%",
    marginTop: "25px"
  },
  foodImage: {
    width: "100%",
    height: 220,
    borderRadius: 15
  },
  detailSection: {
    marginTop: "25px"
  },
  nameRatingWrapper: {
    width: "100%",
    flexDirection: "row"
  },
  nameStrip: { width: "50%" },
  ratingStrip: {
    width: "50%",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  distanceWrapper: { width: "100%", flexDirection: "row", marginTop: "8px" },
  name: {
    fontSize: 18,
    fontWeight: "500"
  },
  rating: {
    fontSize: 12,
    color: "grey"
  },
  ratingStarImg: {
    width: "60%",
    height: 20
  }
});

export default RestroCard;
