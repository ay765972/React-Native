import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown: false
    };
  }
  onPress = () => {
    this.setState({
      dropDown: !this.state.dropDown
    });
  };
  render() {
    return (
      <View style={styles.base}>
        <View style={styles.subBase}>
          <View>
            <Text style={styles.locationTitle}>Your Location</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.onPress()}
            style={styles.iconTitleWrapper}
          >
            <View>
              <Text style={styles.location}>Gurugram</Text>
            </View>
            <View style={this.state.dropDown ? styles.upIcon : styles.downIcon}>
              <Image
                style={styles.icon}
                source={require("../assets/downArrow.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.profileImage}>
          <Image
            style={styles.image}
            source={require("../assets/profilePic.png")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    width: "100%",
    flexDirection: "row"
  },
  subBase: { width: "50%", marginTop: "10px" },
  locationTitle: {
    fontSize: 12,
    color: "grey"
  },
  location: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
  icon: {
    width: 20,
    height: 20
  },
  iconTitleWrapper: {
    flexDirection: "row",
    marginTop: 5
  },
  downIcon: { marginLeft: "10px", marginTop: "5px" },
  upIcon: {
    transform: [{ rotate: "180deg" }],
    marginLeft: "10px",
    marginTop: "5px"
  },
  profileImage: {
    width: "50%",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  image: {
    width: 70,
    height: 70
  }
});

export default Header;
