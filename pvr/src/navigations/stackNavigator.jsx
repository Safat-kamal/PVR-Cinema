/* eslint-disable react/no-unstable-nested-components */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PlacesScreen from '../screens/PlacesScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import SeatsScreen from '../screens/SeatsScreen';
import FoodScreen from '../screens/FoodScreen';
import PaymentScreen from '../screens/PaymentScreen';
import ThankYouScreen from '../screens/ThankYouScreen';

const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

function HomeStackScreens() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="homeScreen"
        component={HomeScreen}
        options={{title: ''}}
      />
      <HomeStack.Screen
        name="placeScreen"
        component={PlacesScreen}
        options={{title: ''}}
      />
      <HomeStack.Screen name="MovieScreen" component={MovieDetailsScreen} />
      <HomeStack.Screen
        name="seatScreen"
        component={SeatsScreen}
        options={{title: ''}}
      />
      <HomeStack.Screen
        name="foodScreen"
        component={FoodScreen}
        options={{title: 'Food Court'}}
      />
      <HomeStack.Screen
        name="paymentScreen"
        component={PaymentScreen}
        options={{title: 'Payment'}}
      />
      <HomeStack.Screen
        name="thankYouScreen"
        component={ThankYouScreen}
        options={{title: 'Thank You'}}
      />
    </HomeStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="profileScreen"
        component={ProfileScreen}
        options={{title: ''}}
      />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="homeNavigatioon"
          component={HomeStackScreens}
          options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle: {color: 'black'},
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon name="home-sharp" size={24} color="#BD1E1E" />
              ) : (
                <Icon name="home-outline" size={24} />
              ),
          }}
        />
        <Tab.Screen
          name="profileNavigation"
          component={ProfileStackScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarLabelStyle: {color: 'black'},
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon name="person-circle-sharp" size={28} color="#BD1E1E" />
              ) : (
                <Icon name="person-circle-outline" size={28} />
              ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default TabNavigation;
