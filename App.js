import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Root from "./src/Root";

//type Props = {};
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Root />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
