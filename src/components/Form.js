import React, { Component } from "react";
import { View, Text, ImageBackground, Dimensions, Image } from "react-native";

const { witdh, height } = Dimensions.get("window");
class Form extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../img/bg.png")}
        style={{
          witdh,
          height,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Image source={require("../img/logo.png")} />
        <Text style={styles.nm}>eMenu</Text>
        <View style={styles.section} />
      </ImageBackground>
    );
  }
}
const styles = {
  section: {
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 15,
    witdh: witdh * 0.62,
    height: height * 0.32
  },
  nm: {
    marginTop: 20,
    fontSize: 36,
    fontWeight: "bold"
  }
};

export default Form;
