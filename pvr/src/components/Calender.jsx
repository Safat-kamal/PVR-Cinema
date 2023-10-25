import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Date from './Date';
import moment from 'moment';

const Calender = ({selectedDate, setSelectedDate}) => {
  const [dates, setDates] = useState();
  const getDates = () => {
    const myDates = [];
    for (let i = 0; i < 10; i++) {
      myDates.push(moment().add(i, 'days'));
    }
    setDates(myDates);
  };
  useEffect(() => {
    getDates();
  }, []);
  return (
    <View style={styles.calenderContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {dates?.map((date, index) => (
          <Date
            date={date}
            key={index}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Calender;

const styles = StyleSheet.create({
  calenderContainer: {
    paddingHorizontal: 20,
  },
});
