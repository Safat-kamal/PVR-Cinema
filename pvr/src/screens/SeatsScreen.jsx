import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

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
  const [selectedSeats, setSelectedSeats] = useState([]);
  const handleSeatPress = (row, seat) => {
    const isSelected = selectedSeats.some(
      selectedSeat => selectedSeat.row === row && selectedSeat.seat === seat,
    );
    if (isSelected) {
      setSelectedSeats(prevState =>
        prevState.filter(
          selectedSeat =>
            selectedSeat.row !== row || selectedSeat.seat !== seat,
        ),
      );
    } else {
      setSelectedSeats(prevState => [...prevState, {row, seat}]);
    }
  };
  const payCta = () => {
    const updatedRows = [...rows];
    selectedSeats.forEach(seat => {
      const rowIndex = updatedRows.findIndex(row => row.row === seat.row);
      const seatIndex = updatedRows[rowIndex].seats.findIndex(
        s => s.seat === seat.seat,
      );
      updatedRows[rowIndex].seats[seatIndex].bookingStatus = 'booked';
    });
    setRows(updatedRows);
    setSelectedSeats([]);
  };
  return (
    <View>
      <Text style={styles.title}>Please Choose Your Seats:</Text>
      <ScrollView style={styles.seatRows} showsVerticalScrollIndicator={false}>
        {rows.map((row, index) => (
          <View key={index} style={styles.seatRow}>
            <Text style={styles.seatRowName}>{row.row}</Text>
            {row.seats.map((seat, idx) => (
              <Pressable
                key={idx}
                style={[
                  styles.seatName,
                  selectedSeats.some(
                    selectedSeat =>
                      selectedSeat.row === row.row &&
                      selectedSeat.seat === seat.seat,
                  ) && styles.selectedSeat,
                  seat.bookingStatus === 'booked' && styles.booked,
                ]}
                disabled={seat.bookingStatus === 'booked'}
                onPress={() => handleSeatPress(row.row, seat.seat)}>
                <Text
                  style={seat.bookingStatus === 'booked' && styles.seatNumber}>
                  {seat.seat}
                </Text>
              </Pressable>
            ))}
          </View>
        ))}
      </ScrollView>
      <View style={styles.seatsInfo}>
        <View style={styles.seatInfo}>
          <Icon name="square" size={26} color="#881B26" />
          <Text style={styles.seatInfoText}>Occupied</Text>
        </View>
        <View style={styles.seatInfo}>
          <Icon name="square" size={26} color="#96A092" />
          <Text style={styles.seatInfoText}>Vacant</Text>
        </View>
        <View style={styles.seatInfo}>
          <Icon name="square" size={26} color="#78A1A5" />
          <Text style={styles.seatInfoText}>Selected</Text>
        </View>
      </View>
      <View style={styles.paymentInfo}>
        <View style={styles.paymentSummary}>
          <Text style={styles.paymentSummaryText}>SUMMARY </Text>
          <View style={styles.paymentSummaryDetails}>
            <Text style={styles.paymentSummaryDetailText}>Total Tickets:</Text>
            <Text style={styles.paymentSummaryDetailTextRight}>2</Text>
          </View>
          <View style={styles.paymentSummaryDetails}>
            <Text style={styles.paymentSummaryDetailText}>Price:</Text>
            <Text style={styles.paymentSummaryDetailTextRight}>₹949</Text>
          </View>
          <View style={styles.paymentSummaryDetails}>
            <Text style={styles.paymentSummaryDetailText}>Tax:</Text>
            <Text style={styles.paymentSummaryDetailTextRight}>₹125</Text>
          </View>
          <View style={[styles.paymentSummaryDetails, styles.totalPrice]}>
            <Text style={styles.paymentSummaryDetailText}>Price To Pay:</Text>
            <Text style={styles.paymentSummaryDetailTextRight}>₹1074</Text>
          </View>
        </View>
        <Pressable style={styles.proceedToPay} onPress={() => payCta()}>
          <Text style={styles.proceedToPayText}>Proceed To Pay</Text>
          <Icon name="arrow-forward" size={28} color="#fff" />
        </Pressable>
      </View>
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
    height: '52%',
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
    backgroundColor: '#CAD0C8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  selectedSeat: {
    backgroundColor: '#78A1A5',
  },
  booked: {
    backgroundColor: '#881B26',
  },
  seatNumber: {
    color: '#fff',
  },
  seatsInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 10,
    gap: 30,
    backgroundColor: '#E0E0E0',
  },
  seatInfo: {
    alignItems: 'center',
    gap: 5,
  },
  seatInfoText: {
    fontWeight: '700',
  },
  paymentInfo: {
    gap: 10,
    paddingHorizontal: 20,
    backgroundColor: '#eee',
  },
  paymentSummaryText: {
    marginVertical: 4,
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 1,
  },
  paymentSummary: {
    alignItems: 'flex-end',
    gap: 6,
  },
  paymentSummaryDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 6,
  },
  paymentSummaryDetailText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#666',
  },
  paymentSummaryDetailTextRight: {
    fontSize: 17,
    fontWeight: '600',
  },
  totalPrice: {
    borderTopColor: '#777',
    borderTopWidth: 0.5,
    paddingVertical: 3,
  },
  proceedToPay: {
    backgroundColor: '#D75B1D',
    width: 'auto',
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  proceedToPayText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 2,
  },
});
