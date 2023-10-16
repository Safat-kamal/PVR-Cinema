import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const SeatsScreen = () => {
  const [rows, setRows] = useState([
    {
      row: 'A',
      seats: [
        {seat: '1', bookingStatus: 'false'},
        {seat: '2', bookingStatus: 'false'},
        {seat: '3', bookingStatus: 'false'},
        {seat: '4', bookingStatus: 'false'},
        {seat: '5', bookingStatus: 'false'},
        {seat: '6', bookingStatus: 'false'},
        {seat: '7', bookingStatus: 'false'},
      ],
    },
    {
      row: 'B',
      seats: [
        {seat: '1', bookingStatus: 'false'},
        {seat: '2', bookingStatus: 'false'},
        {seat: '3', bookingStatus: 'false'},
        {seat: '4', bookingStatus: 'false'},
        {seat: '5', bookingStatus: 'false'},
        {seat: '6', bookingStatus: 'false'},
        {seat: '7', bookingStatus: 'false'},
      ],
    },
    {
      row: 'C',
      seats: [
        {seat: '1', bookingStatus: 'false'},
        {seat: '2', bookingStatus: 'false'},
        {seat: '3', bookingStatus: 'false'},
        {seat: '4', bookingStatus: 'false'},
        {seat: '5', bookingStatus: 'false'},
        {seat: '6', bookingStatus: 'false'},
        {seat: '7', bookingStatus: 'false'},
      ],
    },
    {
      row: 'D',
      seats: [
        {seat: '1', bookingStatus: 'false'},
        {seat: '2', bookingStatus: 'false'},
        {seat: '3', bookingStatus: 'false'},
        {seat: '4', bookingStatus: 'false'},
        {seat: '5', bookingStatus: 'false'},
        {seat: '6', bookingStatus: 'false'},
        {seat: '7', bookingStatus: 'false'},
      ],
    },
    {
      row: 'E',
      seats: [
        {seat: '1', bookingStatus: 'false'},
        {seat: '2', bookingStatus: 'false'},
        {seat: '3', bookingStatus: 'false'},
        {seat: '4', bookingStatus: 'false'},
        {seat: '5', bookingStatus: 'false'},
        {seat: '6', bookingStatus: 'false'},
        {seat: '7', bookingStatus: 'false'},
      ],
    },
    {
      row: 'F',
      seats: [
        {seat: '1', bookingStatus: 'false'},
        {seat: '2', bookingStatus: 'false'},
        {seat: '3', bookingStatus: 'false'},
        {seat: '4', bookingStatus: 'false'},
        {seat: '5', bookingStatus: 'false'},
        {seat: '6', bookingStatus: 'false'},
        {seat: '7', bookingStatus: 'false'},
      ],
    },
    {
      row: 'G',
      seats: [
        {seat: '1', bookingStatus: 'false'},
        {seat: '2', bookingStatus: 'false'},
        {seat: '3', bookingStatus: 'false'},
        {seat: '4', bookingStatus: 'false'},
        {seat: '5', bookingStatus: 'false'},
        {seat: '6', bookingStatus: 'false'},
        {seat: '7', bookingStatus: 'false'},
      ],
    },
    {
      row: 'H',
      seats: [
        {seat: '1', bookingStatus: 'false'},
        {seat: '2', bookingStatus: 'false'},
        {seat: '3', bookingStatus: 'false'},
        {seat: '4', bookingStatus: 'false'},
        {seat: '5', bookingStatus: 'false'},
        {seat: '6', bookingStatus: 'false'},
        {seat: '7', bookingStatus: 'false'},
      ],
    },
    {
      row: 'I',
      seats: [
        {seat: '1', bookingStatus: 'false'},
        {seat: '2', bookingStatus: 'false'},
        {seat: '3', bookingStatus: 'false'},
        {seat: '4', bookingStatus: 'false'},
        {seat: '5', bookingStatus: 'false'},
        {seat: '6', bookingStatus: 'false'},
        {seat: '7', bookingStatus: 'false'},
      ],
    },
    {
      row: 'J',
      seats: [
        {seat: '1', bookingStatus: 'false'},
        {seat: '2', bookingStatus: 'false'},
        {seat: '3', bookingStatus: 'false'},
        {seat: '4', bookingStatus: 'false'},
        {seat: '5', bookingStatus: 'false'},
        {seat: '6', bookingStatus: 'false'},
        {seat: '7', bookingStatus: 'false'},
      ],
    },
  ]);
  return (
    <View>
      <Text style={styles.title}>Please Choose Your Seats:</Text>
      <ScrollView style={styles.seatRows} showsVerticalScrollIndicator={false}>
        {rows.map((row, index) => (
          <View key={index} style={styles.seatRow}>
            <Text style={styles.seatRowName}>{row.row}</Text>
            {row.seats.map((seat, idx) => (
              <Pressable key={idx} style={styles.seatName}>
                <Text style={styles.seatNumber}>{seat.seat}</Text>
              </Pressable>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SeatsScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 20,
    marginHorizontal: 15,
  },
  seatRows: {
    marginHorizontal: 15,
    height: '60%',
  },
  seatRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  seatRowName: {
    fontSize: 17,
    fontWeight: '600',
  },
  seatName: {
    width: 40,
    height: 40,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
