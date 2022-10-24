import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomButton from '../components/CustomButton';
import ImageItem from '../components/ImageItem';

const getAllData = async () => {
  const [data, setData] = useState({});

  try {
    // setIsLoading(true);
    const getData = await fetch(
      'https://playgroundapi.com/bootcamp/api/web/posting/list-posting?page=0',
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + (await AsyncStorage.getItem('token')),
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );
    if (getData.status === 500) {
      // setIsLoading(false);
      alert('Username or password wrong!');
      return null;
    }
    if (getData.status === 200) {
      const DATA = await getData.json();
      // setMyData(results);
      // setIsLoading(false);
      // AsyncStorage.setItem('token', results.data.token);
      // console.log(await AsyncStorage.getItem('@token'));
      // navigation.navigate('Homepage');
      // console.log(results);
      return DATA;
    }
  } catch (e) {
    console.error(e);
    // setIsLoading(false);
  }

  return null;
};

getAllData();

// console.log(DATA);

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Fourth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Fifth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Sixth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Seventh Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Eight Item',
  },
];

const onUploadPress = () => {
  console.warn('clicked');
};

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Homepage = () => {
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileWrapper}>
        <View style={styles.profilePictureWrapper}>
          <Image
            source={require('../../assets/images/kucing.jpg')}
            style={styles.profilePicture}
          />
        </View>
        <View style={styles.navigatorWrapper}>
          <Text style={styles.username}>Right</Text>
          <CustomButton title="Upload" onPress={onUploadPress} />
          <CustomButton title="Log out" onPress={onUploadPress} type="RED" />
        </View>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileWrapper: {
    // display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '20%',
  },
  profilePictureWrapper: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    fontSize: 20,
    marginTop: 15,
    marginStart: 10,
  },
  navigatorWrapper: {
    width: '65%',
    alignSelf: 'center',
  },
  item: {
    backgroundColor: 'skyblue',
    padding: 40,
    margin: 10,
    alignItems: 'center',
  },
});

export default Homepage;
