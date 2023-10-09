/* eslint-disable react/no-unstable-nested-components */
import {
  FlatList,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useContext, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Places} from '../stores/PlaceContext';

const PlacesScreen = () => {
  const navigation = useNavigation();
  const [cityName, setCityName] = useState('');

  const cityNameHandler = city => {
    setCityName(city);
  };
  const setCityHandler = city => {
    setSelectedCity(city);
    setTimeout(() => navigation.navigate('homeScreen'), 800);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()} style={styles.header}>
          <Icon name="arrow-back-outline" color="#BD1E1E" size={28} />
          <Text style={styles.headerText}>Choose Locations</Text>
        </Pressable>
      ),
    });
  }, [navigation]);

  const {selectedCity, setSelectedCity} = useContext(Places);
  const placesArray = [
    {
      id: 1,
      name: 'Delhi',
      image: 'https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg',
    },
    {
      id: 2,
      name: 'Mumbai',
      image:
        'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/mumbai-1.jpg',
    },
    {
      id: 3,
      name: 'Hyderabad',
      image:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/46/bc/ed/hyderabad.jpg?w=700&h=-1&s=1',
    },
    {
      id: 4,
      name: 'Chennai',
      image:
        'https://thumbs.dreamstime.com/b/chennai-high-court-ancient-high-courts-india-madras-high-court-chennai-madras-chennai-high-court-ancient-high-courts-181356030.jpg',
    },
    {
      id: 5,
      name: 'Bangalore',
      image:
        'https://www.swantour.com/blogs/wp-content/uploads/2018/02/Tourist-Places-in-Bangalore.jpg',
    },
    {
      id: 6,
      name: 'Amritsar',
      image:
        'https://housing.com/news/wp-content/uploads/2022/11/Famous-tourist-places-in-India-state-compressed.jpg',
    },
    {
      id: 7,
      name: 'Lucknow',
      image:
        'https://chaloghumane.com/wp-content/uploads/2021/08/Lucknow-Tour.jpg',
    },
    {
      id: 8,
      name: 'Howrah',
      image:
        'https://www.oyorooms.com/travel-guide/wp-content/uploads/2021/05/Visit-in-Kolkata-1.jpg',
    },
    {
      id: 9,
      name: 'Jaipur',
      image:
        'https://ihplb.b-cdn.net/wp-content/uploads/2021/09/places-to-visit-jaipur-750x430.jpeg',
    },
    {
      id: 10,
      name: 'Ahmedabad',
      image:
        'https://www.revv.co.in/blogs/wp-content/uploads/2020/03/Unexplore-places-to-visit-in-ahmedabad.jpg',
    },
  ];

  return (
    <View style={styles.placesContainer}>
      <View style={styles.SearchInputContainer}>
        <TextInput
          placeholder="Search City Name"
          value={cityName}
          onChangeText={cityNameHandler}
          maxLength={150}
          clearButtonMode="always"
          style={styles.SearchInput}
          placeholderTextColor="#777"
        />
        <Icon name="search-outline" color="#BD1E1E" size={28} />
      </View>
      <View>
        <Text style={styles.heading}>Select Location:</Text>
        <FlatList
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-evenly'}}
          data={placesArray}
          renderItem={({item}) => (
            <Pressable
              onPress={() => setCityHandler(item.name)}
              style={styles.cityImageContainer}>
              <ImageBackground
                imageStyle={{borderRadius: 10}}
                style={styles.cityImage}
                source={{uri: item.image}}>
                {item.name === selectedCity && (
                  <Icon
                    style={styles.checkedIcon}
                    name="checkmark-circle"
                    color="#BD1E1E"
                    size={28}
                  />
                )}
                <View style={styles.cityTitleContainer}>
                  <Text style={styles.cityTitle}>{item.name}</Text>
                </View>
              </ImageBackground>
            </Pressable>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default PlacesScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    gap: 9,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 17,
    fontWeight: '600',
  },
  placesContainer: {
    paddingHorizontal: 10,
    backgroundColor: '#1F1F1F',
    flex: 1,
  },
  SearchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 13,
    paddingHorizontal: 15,
    marginVertical: 15,
    borderRadius: 10,
  },
  SearchInput: {
    color: '#BD1E1E',
    fontSize: 17,
    width: '90%',
  },
  heading: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cityImageContainer: {
    gap: 10,
    marginTop: 20,
  },
  cityImage: {
    width: 180,
    height: 100,
    opacity: 0.9,
  },
  cityTitleContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  checkedIcon: {
    marginTop: 2,
    marginHorizontal: 7,
  },
  cityTitle: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 7,
    marginHorizontal: 7,
  },
});
