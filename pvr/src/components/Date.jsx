import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import moment from 'moment';

const Date = ({date, selectedDate, setSelectedDate}) => {
  const day = moment(date).format('ddd');
  const dayNumber = moment(date).format('D');
  const fullDate = moment(date).format('YYYY-MM-DD');

  return (
    <Pressable
      onPress={() => setSelectedDate(fullDate)}
      style={[
        styles.container,
        selectedDate === fullDate && styles.activeDate,
      ]}>
      <Text
        style={[styles.dayName, selectedDate === fullDate && styles.activeDay]}>
        {day}
      </Text>
      <Text
        style={[
          styles.dayNumber,
          selectedDate === fullDate && styles.activeDayNumber,
        ]}>
        {dayNumber}
      </Text>
    </Pressable>
  );
};

export default Date;

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    marginHorizontal: 8,
    marginVertical: 15,
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDate: {
    backgroundColor: '#BD1E1E',
    borderColor: '#BD1E1E',
  },
  dayName: {
    fontSize: 15,
    color: '#000',
    fontWeight: '500',
  },
  dayNumber: {
    fontSize: 23,
    color: '#000',
    fontWeight: '600',
    marginTop: 7,
  },
  activeDay: {
    color: '#fff',
  },
  activeDayNumber: {
    color: '#fff',
  },
});
