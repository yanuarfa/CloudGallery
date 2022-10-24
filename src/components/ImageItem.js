import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

const ImageItem = props => {
  const {dataSource, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={dataSource} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});

export default ImageItem;
