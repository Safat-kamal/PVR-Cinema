import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Calender from '../components/Calender';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

const MovieDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const today = moment().format('YYYY-MM-DD');
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedMall, setSelectedMall] = useState();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
      headerStyle: {
        backgroundColor: '#fff',
        shadowColo: 'transparent',
        shadowOpacity: 0.3,
        shadowOffset: {width: -1, height: 1},
        shadowRadius: 3,
      },
    });
  });
  const malls = [
    {
      id: '0',
      place: 'Bangalore',
      galleria: [
        {
          id: '10',
          name: 'PVR MSR Elements Mall Bengaluru',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '11',
          name: 'PVR Vaishnavi Sapphire Bengaluru',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '12',
          name: 'PVR Orion Bengaluru',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '13',
          name: 'PVR Aura Park Square Bengaluru',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '14',
          name: 'PVR The Cinema GT World Bengaluru',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '15',
          name: 'PVR VEGA Bengaluru',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
      ],
    },
    {
      id: '1',
      place: 'Hyderabad',
      galleria: [
        {
          id: '20',
          name: 'PVR Atrium Gachibowli Hyderabad',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '21',
          name: 'PVR Icon Hitech Madhapur Hyderabad',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '22',
          name: 'PVR Preston Prime, Gachibowli Hyderabad',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '23',
          name: 'PVR Mallapur Hyderabad',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '24',
          name: 'PVR Next Galleria Mall Panjagutta',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '25',
          name: 'PVR RK Cineplex Hyderabad',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
      ],
    },
    {
      id: '2',
      place: 'Delhi',
      galleria: [
        {
          id: '30',
          name: 'PVR Select City Walk Delhi',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '31',
          name: 'PVR Anupam Saket Delhi',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '32',
          name: 'PVR ECX Chanakyapuri Delhi',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '33',
          name: 'PVR Promenade Vasant Kunj Delhi ',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '34',
          name: 'PVR Rivoli Delhi',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '35',
          name: 'PVR Crown Plaza Faridabad',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
      ],
    },
    {
      id: '3',
      place: 'Ahmedabad',
      galleria: [
        {
          id: '34',
          name: 'PVR Motera Ahmedabad',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '41',
          name: 'PVR Arved Transcube Ahmedabad',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '42',
          name: 'Cinemax Shiv Ahmedabad',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '43',
          name: 'PVR Acropolis Ahmedabad',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '44',
          name: 'Cinemax Dev Arc Ahmedabad',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
      ],
    },
    {
      id: '4',
      place: 'Chennai',
      galleria: [
        {
          id: '50',
          name: 'PVR SKLS Galaxy Mall, Red Hills Chennai',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '51',
          name: 'SPI S2 Perambur Chennai',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '52',
          name: 'PVR VR Chennai Anna Nagar ',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '53',
          name: 'PVR Ampa Chennai',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '54',
          name: 'SPI Palazzo Nexus Vijaya Mall, Vadapalani Chennai',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
      ],
    },
    {
      id: '5',
      place: 'Kolkata',
      galleria: [
        {
          id: '60',
          name: 'PVR Avani Kolkata',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '61',
          name: 'PVR Diamond Plaza Jassore Kolkata',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '62',
          name: 'PVR Manisquare Kolkata',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '63',
          name: 'PVR Uniworld Downtown Mall, New Town',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
      ],
    },
    {
      id: '6',
      place: 'Jaipur',
      galleria: [
        {
          id: '70',
          name: 'PVR Mall Of Jaipur',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '71',
          name: 'PVR LUXE MALL OF JAIPUR',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '72',
          name: 'PVR Manisquare',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '73',
          name: 'PVR Uniworld Downtown Mall, New Town',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
      ],
    },
    {
      id: '7',
      place: 'Lucknow',
      galleria: [
        {
          id: '80',
          name: 'PVR Phoenix Lucknow',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '81',
          name: 'PVR Sahara Lucknow',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '82',
          name: 'PVR Sahu Lucknow',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '83',
          name: 'PVR Singapore Lucknow',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '84',
          name: 'PVR SUPERPLEX Lulu Lucknow',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
      ],
    },
    {
      id: '8',
      place: 'Mumbai',
      galleria: [
        {
          id: '85',
          name: 'PVR Minar Cinema Mumbai',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '86',
          name: 'PVR Icon VFX Mumbai',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '87',
          name: 'PVR Preston Prime,Bandra Mumbai',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
      ],
    },
    {
      id: '9',
      place: 'Amritsar',
      galleria: [
        {
          id: '88',
          name: 'PVR Avani Amritsar',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '89',
          name: 'PVR Diamond Plaza Jassore Amritsar',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '90',
          name: 'PVR Manisquare, Chandigrah Amritsar',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '91',
          name: 'PVR Downtown Mall, Amritsar',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
      ],
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        <Calender
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </ScrollView>
      <View style={styles.mallContainer}>
        <Text style={styles.location}>
          You are at {route.params.selectedCity}
        </Text>
        <Text style={styles.description}>Here are Available Theaters:</Text>
        {malls
          .filter(mall => mall.place === route.params.selectedCity)
          .map(place =>
            place.galleria.map((mall, index) => (
              <ScrollView key={index}>
                <Pressable
                  onPress={() =>
                    setSelectedMall(selectedMall === mall.id ? '' : mall.id)
                  }
                  style={styles.mallTile}>
                  <Text style={styles.mallName}>{mall.name}</Text>
                  <Icon
                    name={
                      selectedMall === mall.id
                        ? 'chevron-up-outline'
                        : 'chevron-down-outline'
                    }
                    size={26}
                    color="#fff"
                  />
                </Pressable>
                <View style={styles.showTimeWrapper}>
                  {selectedMall === mall.id
                    ? mall.showtimes.map((show, idx) => (
                        <Pressable
                          key={idx}
                          style={styles.showTimeContainer}
                          onPress={() =>
                            navigation.navigate('seatScreen', {
                              showTime: show,
                              Date: selectedDate,
                              movieName: route.params.title,
                            })
                          }>
                          <Text style={styles.showTime}>{show}</Text>
                        </Pressable>
                      ))
                    : null}
                </View>
              </ScrollView>
            )),
          )}
      </View>
    </SafeAreaView>
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  mallContainer: {
    margin: 25,
  },
  location: {
    fontSize: 15,
    fontWeight: '500',
    color: '#555',
  },
  description: {
    fontSize: 17,
    fontWeight: '600',
    marginVertical: 5,
  },
  mallTile: {
    width: 'auto',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#F58700',
    borderColor: '#F58700',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginVertical: 10,
  },
  mallName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  showTimeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 5,
  },
  showTimeContainer: {
    backgroundColor: '#9AC804',
    borderColor: '#9AC804',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 8,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showTime: {
    color: '#333',
    fontWeight: '500',
  },
});
