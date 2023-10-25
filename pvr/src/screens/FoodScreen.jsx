import {ScrollView, StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import FoodCard from '../components/FoodCard';

const FoodScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const foods = [
    {
      id: '0',
      name: 'Crispy Veg Double Patty + Crispy Veg Double Patty',
      image:
        'https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20220314053635821439_262x360jpg',
      description: 'Crispy Veg Double Patty + Crispy Veg Double Patty',
      price: 180,
      veg: true,
    },
    {
      id: '1',
      name: 'Lit Whopper Jr Veg + Lit Whopper Jr Veg',
      image:
        'https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20220314062022014950_262x360jpg',
      description: 'Lit Whopper Jr Veg + Lit Whopper Jr Veg',
      price: 238,
      veg: true,
    },
    {
      id: '2',
      name: 'Crsipy Chicken Double Patty + Crsipy Chicken Double Patty',
      image:
        'https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20220613110553977083_262x360jpg',
      description: 'Crsipy Chicken Double Patty + Crsipy Chicken Double Patty',
      price: 258,
      veg: false,
    },
    {
      id: '3',
      name: 'Chicken Whopper + Chicken Whopper',
      image:
        'https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20220314062201549185_262x360jpg',
      description: 'Chicken Whopper + Chicken Whopper',
      price: 398,
      veg: false,
    },
    {
      id: '4',
      name: '2 Crispy Veg Double Patty + 1 King Fries + 1 Veggie Strips',
      image:
        'https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20210510124442700555_262x360jpg',
      description: '2 Crispy Veg Double Patty + 1 King Fries + 1 Veggie Strips',
      price: 348,
      veg: true,
    },
    {
      id: '5',
      name: '2 Lite Whopper Jr Veg + 1 King Fries',
      image:
        'https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20210510124749940592_262x360jpg',
      description: '2 Lite Whopper Jr Veg + 1 King Fries',
      price: 225,
      veg: true,
    },
  ];
  const [selectedFood, setSelectedFood] = useState([]);
  const addFood = (foodName, foodPrice, foodId, foodType) => {
    const isFoodAdded = selectedFood.some(food => food.name === foodName);
    if (isFoodAdded) {
      setSelectedFood(prevState =>
        prevState.filter(food => food.name !== foodName),
      );
    } else {
      setSelectedFood(prevState => [
        ...prevState,
        {id: foodId, name: foodName, type: foodType, price: foodPrice},
      ]);
    }
  };
  const continuePress = () => {
    navigation.navigate('paymentScreen', {
      movieName: route.params.movieName,
      Seats: route.params.Seats,
      showTime: route.params.showTime,
      Date: route.params.Date,
      Foods: selectedFood,
    });
  };
  return (
    <View>
      <View style={styles.foodsContainer}>
        <ScrollView>
          <View style={styles.foods}>
            {foods.map((food, index) => (
              <FoodCard
                item={food}
                key={index}
                selectedFood={selectedFood}
                setSelectedFood={setSelectedFood}
                addFood={addFood}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <Pressable style={styles.proceedToPay} onPress={() => continuePress()}>
        <Text style={styles.proceedToPayText}>
          {selectedFood.length > 0 ? 'Continue' : 'Skip'}
        </Text>
        <Icon name="chevron-forward-outline" size={26} color="#fff" />
      </Pressable>
    </View>
  );
};

export default FoodScreen;

const styles = StyleSheet.create({
  foodsContainer: {
    height: '89%',
    marginBottom: 15,
  },
  foods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginVertical: 20,
  },
  proceedToPay: {
    backgroundColor: '#BD1E1E',
    width: 'auto',
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    marginHorizontal: 12,
  },
  proceedToPayText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 2,
    textAlign: 'center',
  },
});
