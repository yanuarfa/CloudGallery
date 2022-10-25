import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomButton from '../components/CustomButton';
import ImageItem from '../components/ImageItem';

const getAllData = async () => {
  let token = await AsyncStorage.getItem('token');
  console.log(token);

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

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    source: 'https://playgroundapi.com/bootcamp/api/web/posting/image/124',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    source: 'https://playgroundapi.com/bootcamp/api/web/posting/image/124',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    source: 'https://playgroundapi.com/bootcamp/api/web/posting/image/124',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Fourth Item',
    source: 'https://playgroundapi.com/bootcamp/api/web/posting/image/124',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Fifth Item',
    source: 'https://playgroundapi.com/bootcamp/api/web/posting/image/124',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Sixth Item',
    source: 'https://playgroundapi.com/bootcamp/api/web/posting/image/124',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Seventh Item',
    source: 'https://playgroundapi.com/bootcamp/api/web/posting/image/124',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Eight Item',
    source: 'https://playgroundapi.com/bootcamp/api/web/posting/image/124',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Homepage = () => {
  const [token, setToken] = useState('');
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <ImageItem
      source={item.source}
      title={item.title}
      onPress={() => navigation.navigate('Detailpage')}
    />
  );

  useEffect(() => {
    getAllData;
  }, []);

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
          <CustomButton
            title="Upload"
            onPress={() => navigation.navigate('Uploadpage')}
          />
          <CustomButton title="Log out" type="RED" />
        </View>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.itemWrapper}
        numColumns={3}
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
  itemWrapper: {
    flexDirection: 'column',
  },
});

export default Homepage;
