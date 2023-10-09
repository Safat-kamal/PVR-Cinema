/* eslint-disable react/no-unstable-nested-components */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PlacesScreen from '../screens/PlacesScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

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
