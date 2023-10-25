import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';

const SeatsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
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
  const continuePress = () => {
    if (selectedSeats && selectedSeats.length > 0) {
      Alert.alert('Do you want to add some beverages?', '', [
        {
          text: 'Yes',
          onPress: () =>
            navigation.navigate('foodScreen', {
              movieName: route.params.movieName,
              Seats: selectedSeats,
              showTime: route.params.showTime,
              Date: route.params.Date,
            }),
        },
        {
          text: 'No',
          onPress: () =>
            navigation.navigate('paymentScreen', {
              movieName: route.params.movieName,
              Seats: selectedSeats,
              showTime: route.params.showTime,
              Date: route.params.Date,
              Foods: null,
            }),
        },
      ]);
    } else {
      Alert.alert('Please Choose atlease one Seat to continue', [
        {
          text: 'OK',
        },
      ]);
    }

    // const updatedRows = [...rows];
    // selectedSeats.forEach(seat => {
    //   const rowIndex = updatedRows.findIndex(row => row.row === seat.row);
    //   const seatIndex = updatedRows[rowIndex].seats.findIndex(
    //     s => s.seat === seat.seat,
    //   );
    //   updatedRows[rowIndex].seats[seatIndex].bookingStatus = 'booked';
    // });
    // setRows(updatedRows);
    // setSelectedSeats([]);
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
        <Pressable style={styles.proceedToPay} onPress={() => continuePress()}>
          <Text style={styles.proceedToPayText}>Continue</Text>
          <Icon name="chevron-forward-outline" size={26} color="#fff" />
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
    height: '69.5%',
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
  proceedToPay: {
    backgroundColor: '#BD1E1E',
    width: 'auto',
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
  },
  proceedToPayText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 2,
    textAlign: 'center',
  },
});
