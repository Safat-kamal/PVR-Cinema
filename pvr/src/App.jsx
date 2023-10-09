import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import TabNavigation from './navigations/stackNavigator';
import PlaceContext from './stores/PlaceContext';

function App() {
  return (
    <>
      <PlaceContext>
        <TabNavigation />
      </PlaceContext>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
