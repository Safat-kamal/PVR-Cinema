import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const MovieCard = ({item, selectedCity}) => {
  const naviagation = useNavigation();
  console.log(selectedCity);
  return (
    <Pressable>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original/${item?.poster_path}`,
        }}
        style={styles.poster}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>
          {item.original_title.length > 21
            ? `${item.original_title.substr(0, 19)}...`
            : `${item.original_title}`}
        </Text>
        <Text style={styles.language}>U/A {item.original_language}</Text>
        <Text style={styles.overview}>
          {item.overview.length > 100
            ? `${item.overview.substr(0, 97)}...`
            : `${item.overview}`}
        </Text>
        <Pressable
          style={styles.bookCta}
          onPress={() =>
            naviagation.navigate('MovieScreen', {
              title: item.original_title,
              selectedCity: selectedCity,
            })
          }>
          <Text style={styles.bookNow}>Book Now</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  poster: {
    width: (Dimensions.get('window').width - 80) / 2,
    height: Dimensions.get('window').height / 3.3,
    resizeMode: 'contain',
    flex: 1,
    borderRadius: 20,
  },
  infoContainer: {
    gap: 3,
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
  },
  overview: {
    flexWrap: 'wrap',
    maxWidth: (Dimensions.get('window').width - 80) / 2,
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  bookCta: {
    borderRadius: 8,
    backgroundColor: '#BD1E1E',
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginVertical: 10,
  },
  bookNow: {
    color: '#fff',
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: 1,
    textAlign: 'center',
  },
});
