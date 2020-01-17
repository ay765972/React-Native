import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import RestroCard from "./Components/RestroCard";
import Header from "./Components/Header";

const DATA = [
  {
    id: 1,
    title: "Sanraku",
    cusions: "Japanese,Susi,Indonesian",
    distance: "0.4"
    // image: "./Images/food1.jpg"
  },
  {
    id: 2,
    title: "Sanraku",
    cusions: "Japanese,Susi,Indonesian",
    distance: "0.4"
    // image: "./Images/food2.jpg"
  },
  {
    id: 3,
    title: "Sanraku",
    cusions: "Japanese,Susi,Indonesian",
    distance: "0.4"
    // image: "./Images/food3.jpg"
  },
  {
    id: 4,
    title: "Sanraku",
    cusions: "Japanese,Susi,Indonesian",
    distance: "0.4"
    // image: "./Images/food4.jpg"
  },
  {
    id: 5,
    title: "Sanraku",
    cusions: "Japanese,Susi,Indonesian",
    distance: "0.4"
    // image: "./Images/food2.jpg"
  }
];

class App extends Component {
  render() {
    return (
      <View style={styles.base}>
        <View>
          <Header />
        </View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <RestroCard
              title={item.title}
              imgUri={require("./Images/food1.jpg")}
              name={item.title}
              reviews={"2000"}
              cusions={item.cusions}
              distance={item.distance}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
  }
});

export default App;
