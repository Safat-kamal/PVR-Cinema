import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const FoodCard = ({item, selectedFood, setSelectedFood, addFood}) => {
  return (
    <View style={styles.foodContainer}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.overview}>{item.description}</Text>
        <Text style={styles.type}>{item.veg ? 'Veg' : 'Non-Veg'}</Text>
        <Text style={styles.price}>₹{item.price}</Text>
        {selectedFood.length > 0 &&
        selectedFood.some(food => food.name === item.name) ? (
          <Pressable
            style={styles.removeCta}
            onPress={() => addFood(item.name, item.price, item.id, item.veg)}>
            <Text style={styles.ctaText}>REMOVE</Text>
            <Icon name="remove-circle-outline" size={24} color="#fff" />
          </Pressable>
        ) : (
          <Pressable
            style={styles.addCta}
            onPress={() => addFood(item.name, item.price, item.id, item.veg)}>
            <Icon name="add-circle-outline" size={24} color="#fff" />
            <Text style={styles.ctaText}>ADD</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  foodContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: Dimensions.get('window').width / 2,
    marginBottom: 10,
  },
  image: {
    width: Dimensions.get('window').width / 2.5,
    minHeight: 180,
    flex: 1,
    borderRadius: 10,
  },
  infoContainer: {
    gap: 3,
    marginTop: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
    maxWidth: (Dimensions.get('window').width - 80) / 2,
  },
  overview: {
    flexWrap: 'wrap',
    maxWidth: (Dimensions.get('window').width - 80) / 2,
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  tyep: {
    maxWidth: (Dimensions.get('window').width - 80) / 2,
    fontSize: 14,
    color: '#7A6671',
    marginVertical: 5,
  },
  price: {
    maxWidth: (Dimensions.get('window').width - 80) / 2,
    fontSize: 17,
    color: '#6F5D67',
    marginVertical: 5,
    fontWeight: '900',
  },
  addCta: {
    borderRadius: 8,
    backgroundColor: '#00A35F',
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginVertical: 10,
    maxWidth: (Dimensions.get('window').width - 80) / 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
  },
  removeCta: {
    borderRadius: 8,
    backgroundColor: '#BD1E1E',
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginVertical: 10,
    maxWidth: (Dimensions.get('window').width - 80) / 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
  },
  ctaText: {
    color: '#fff',
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: 1,
    textAlign: 'center',
  },
});
