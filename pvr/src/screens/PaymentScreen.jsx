import {StyleSheet, Text, View, Pressable, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import moment from 'moment';
import RazorpayCheckout from 'react-native-razorpay';

const PaymentScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const payCta = () => {
    // navigation.navigate('thankYouScreen');
    const payAmont =
      route.params.Seats.length * 500 +
      ((route.params.Seats.length * 500) / 100) * 18 +
      (route.params.Foods && route.params.Foods.length > 0
        ? route.params.Foods.reduce(
            (accumulator, currPrice) => accumulator + currPrice.price,
            0,
          )
        : 0);
    console.log(payAmont);
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_ceRAs27nhRvrNR', // Your api key
      amount: '5000',
      name: 'foo',
      prefill: {
        email: 'void@razorpay.com',
        contact: '9191919191',
        name: 'Razorpay Software',
      },
      theme: {color: '#F37254'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        console.log(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // handle failure
        console.log(`Error: ${error.code} | ${error.description}`);
      });
  };
  return (
    <View style={styles.paymentInfo}>
      <View style={styles.paymentSummary}>
        <Text style={styles.paymentSummaryText}>SUMMARY </Text>
        <View style={styles.paymentSummaryDetails}>
          <Text style={styles.paymentSummaryDetailText}>Movie Name:</Text>
          <Text style={styles.paymentSummaryDetailTextRight}>
            {route.params.movieName}
          </Text>
        </View>
        <View style={styles.paymentSummaryDetails}>
          <Text style={styles.paymentSummaryDetailText}>Date:</Text>
          <Text style={styles.paymentSummaryDetailTextRight}>
            {moment(route.params.Date).format('DD-MM-YYYY')}
          </Text>
        </View>
        <View style={styles.paymentSummaryDetails}>
          <Text style={styles.paymentSummaryDetailText}>Day:</Text>
          <Text style={styles.paymentSummaryDetailTextRight}>
            {moment(route.params.Date).format('dddd')}
          </Text>
        </View>
        <View style={styles.paymentSummaryDetails}>
          <Text style={styles.paymentSummaryDetailText}>Show Time:</Text>
          <Text style={styles.paymentSummaryDetailTextRight}>
            {route.params.showTime}
          </Text>
        </View>
        <View style={styles.paymentSummaryDetails}>
          <Text style={styles.paymentSummaryDetailText}>Seats:</Text>
          <View style={styles.seatsRows}>
            {route.params.Seats &&
              route.params.Seats.length > 0 &&
              route.params.Seats.map((seat, index) => (
                <View tyle={styles.seatsRow} key={index}>
                  <Text style={styles.paymentSummaryDetailTextRight}>
                    Row: {seat.row}, Seat: {seat.seat}
                  </Text>
                </View>
              ))}
          </View>
        </View>
        <View style={[styles.paymentSummaryDetails, styles.totalPrice]}>
          <Text style={styles.paymentSummaryDetailText}>Total Tickets:</Text>
          <Text style={styles.paymentSummaryDetailTextRight}>
            {route.params.Seats.length}
          </Text>
        </View>
        <View style={styles.paymentSummaryDetails}>
          <Text style={styles.paymentSummaryDetailText}>Price:</Text>
          <Text style={styles.paymentSummaryDetailTextRight}>
            ₹{route.params.Seats.length * 500}
          </Text>
        </View>
        <View style={styles.paymentSummaryDetails}>
          <Text style={styles.paymentSummaryDetailText}>Tax:</Text>
          <Text style={styles.paymentSummaryDetailTextRight}>
            ₹{((route.params.Seats.length * 500) / 100) * 18}
          </Text>
        </View>
        <View style={[styles.paymentSummaryDetails, styles.totalPrice]}>
          <Text style={styles.paymentSummaryDetailText}>
            Total Ticket Price :
          </Text>
          <Text style={styles.paymentSummaryDetailTextRight}>
            ₹
            {route.params.Seats.length * 500 +
              ((route.params.Seats.length * 500) / 100) * 18}
          </Text>
        </View>
        <Text style={styles.additional}>Add-Ons: </Text>
        <ScrollView>
          <View style={styles.additionalRows}>
            {route.params.Foods &&
              route.params.Foods.length > 0 &&
              route.params.Foods.map((food, index) => (
                <View style={styles.additionalRow} key={index}>
                  <Text style={styles.additionalRowCount}>{index + 1}.</Text>
                  <Text style={styles.addonName}>{food.name}</Text>
                </View>
              ))}
          </View>
        </ScrollView>
        <View style={[styles.paymentSummaryDetails, styles.totalPrice]}>
          <Text style={styles.paymentSummaryDetailText}>
            Total Addons Price:
          </Text>
          <Text style={styles.paymentSummaryDetailTextRight}>
            ₹
            {route.params.Foods && route.params.Foods.length > 0
              ? route.params.Foods.reduce(
                  (accumulator, currPrice) => accumulator + currPrice.price,
                  0,
                )
              : 0}
          </Text>
        </View>
        <View style={[styles.paymentSummaryDetails, styles.totalPrice]}>
          <Text style={styles.paymentSummaryDetailText}>
            Total Price To Pay (Incl. Taxs):
          </Text>
          <Text style={styles.paymentSummaryDetailTextRight}>
            ₹
            {route.params.Seats.length * 500 +
              ((route.params.Seats.length * 500) / 100) * 18 +
              (route.params.Foods && route.params.Foods.length > 0
                ? route.params.Foods.reduce(
                    (accumulator, currPrice) => accumulator + currPrice.price,
                    0,
                  )
                : 0)}
          </Text>
        </View>
      </View>
      <Pressable style={styles.proceedToPay} onPress={() => payCta()}>
        <Text style={styles.proceedToPayText}>PAY</Text>
        <Icon name="chevron-forward-outline" size={26} color="#fff" />
      </Pressable>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  paymentInfo: {
    gap: 13,
    padding: 20,
    backgroundColor: '#D6D6D6',
    marginVertical: 'auto',
    flex: 1,
    justifyContent: 'space-between',
  },
  paymentSummaryText: {
    marginVertical: 4,
    fontSize: 19,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 10,
    textAlign: 'center',
    color: '#BD1E1E',
  },
  seatsRows: {
    flexDirection: 'column',
  },
  seatsRow: {
    flexDirection: 'row',
  },
  paymentSummary: {
    alignItems: 'stretch',
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
    backgroundColor: '#BD1E1E',
    width: 'auto',
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  proceedToPayText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 2,
    textAlign: 'center',
  },
  additional: {
    marginTop: 12,
  },
  additionalRows: {
    flexDirection: 'column',
  },
  additionalRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
    gap: 5,
    marginBottom: 10,
  },
  additionalRowCount: {
    color: '#000',
    fontSize: 17,
    fontWeight: '600',
  },
  addonName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#7E6D63',
  },
});
