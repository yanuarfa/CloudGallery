import { TouchableOpacity, StyleSheet, Image, Text } from "react-native";
import React from "react";

const ImageItem = (props) => {
  const { dataSource, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {/* <Text style={styles.image}>{dataSource}</Text> */}
      <Image source={dataSource} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    // flex: 1,
    // flexBasis: 130,
    width: 130,
    height: 130,
    backgroundColor: "red",
  },
});

export default ImageItem;
