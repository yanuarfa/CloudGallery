import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';

const Detailpage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileWrapper}>
        <Image
          source={require('../../assets/images/kucing.jpg')}
          style={styles.profilePicture}
        />
        <Text style={styles.username}>Yanuar</Text>
      </View>
      <View style={styles.contentWrapper}>
        <Image
          source={{
            uri: 'https://playgroundapi.com/bootcamp/api/web/posting/image/124',
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Kucing Putih</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ut itaque
          nesciunt eveniet possimus? Veniam, enim beatae repudiandae pariatur,
          vitae adipisci laboriosam impedit eos laudantium perspiciatis quas
          natus, sequi quos?
        </Text>
        <Text style={styles.timestamp}>Di unggah pada 2022-10-25 15:35:15</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: '#6889E0',
    borderRadius: 20,
  },
  username: {
    fontSize: 16,
    marginStart: 10,
  },
  contentWrapper: {
    flex: 5,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 500,
    maxHeight: 400,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
  },
  timestamp: {
    marginVertical: 20,
  },
});

export default Detailpage;
