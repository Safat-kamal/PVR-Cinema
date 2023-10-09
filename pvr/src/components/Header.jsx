import {View, Text, ImageBackground, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <ImageBackground
        style={styles.headerImage}
        source={{
          uri: 'https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
        }}>
        <Pressable style={styles.headerInfo}>
          <View style={styles.headerCardInfo}>
            <Text style={styles.releaseInfo}>Releasing 19/07/2023 (IN)</Text>
            <Text style={styles.movieName}>Fast X (2023)</Text>
            <Text style={styles.geners}>Action, Crime, Thriller</Text>
            <Text style={styles.lagnguage}>UA English</Text>
          </View>
          <Pressable style={styles.ctaContainer}>
            <Text style={styles.cta}>Pre Booking</Text>
          </Pressable>
        </Pressable>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    height: 500,
  },
  headerImage: {
    height: 400,
    resizeMode: 'contain',
  },
  headerInfo: {
    backgroundColor: '#fff',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10,
    top: 320,
    left: 0,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerCardInfo: {
    gap: 3,
  },
  releaseInfo: {
    color: '#BD1E1E',
    fontSize: 16,
    marginVertical: 5,
  },
  movieName: {
    fontSize: 19,
  },
  geners: {
    color: '#888',
    fontSize: 14,
  },
  lagnguage: {
    color: '#888',
    fontSize: 14,
  },
  ctaContainer: {
    borderRadius: 10,
    backgroundColor: '#BD1E1E',
  },
  cta: {
    color: '#fff',
    fontSize: 15,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});

export default Header;
