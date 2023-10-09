/* eslint-disable react/no-unstable-nested-components */
import React, {useContext, useLayoutEffect, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Places} from '../stores/PlaceContext';
import Header from '../components/Header';
import MovieCard from '../components/MovieCard';
import Modal from 'react-native-modal';
import Badges from '../components/Badges';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [modalVisibility, setModalVisibility] = useState(false);
  const {selectedCity, setselectedCity} = useContext(Places);
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Text>Hello User!</Text>,
      headerStyle: {
        backgroundColor: '#fff',
        shadowColo: 'transparent',
        shadowOpacity: 0.3,
        shadowOffset: {width: -1, height: 1},
        shadowRadius: 3,
      },
      headerRight: () => (
        <Pressable style={styles.headerRight}>
          <Icon name="notifications-outline" size={24} color="#BD1E1E" />
          <Icon
            onPress={() => navigation.navigate('placeScreen')}
            name="location-outline"
            size={24}
            color="#BD1E1E"
          />

          <Pressable onPress={() => navigation.navigate('placeScreen')}>
            <Text style={styles.cityname}>
              {selectedCity ? selectedCity : 'Delhi'}
            </Text>
          </Pressable>
        </Pressable>
      ),
    });
  });
  const movieData = [
    {
      adult: false,
      backdrop_path: '/2EL6QrQmUt2ntBXjuHO4KsEfaoU.jpg',
      genre_ids: [27, 9648, 53],
      id: 758323,
      original_language: 'English',
      original_title: "The Pope's Exorcist",
      overview:
        "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
      popularity: 4935.809,
      poster_path: '/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg',
      release_date: '2023-04-07',
      title: "The Pope's Exorcist",
      video: false,
      vote_average: 7.4,
      vote_count: 400,
    },
    {
      adult: false,
      backdrop_path: '/iJQIbOPm81fPEGKt5BPuZmfnA54.jpg',
      genre_ids: [16, 12, 10751, 14, 35],
      id: 502356,
      original_language: 'English',
      original_title: 'The Super Mario Bros. Movie',
      overview:
        'While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.',
      popularity: 4137.922,
      poster_path: '/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
      release_date: '2023-04-07',
      title: 'The Super Mario Bros. Movie',
      video: false,
      vote_average: 7.5,
      vote_count: 1760,
    },
    {
      adult: false,
      backdrop_path: '/7bWxAsNPv9CXHOhZbJVlj2KxgfP.jpg',
      genre_ids: [27],
      id: 713704,
      original_language: 'English',
      original_title: 'Evil Dead Rise',
      overview:
        'Two sisters find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.',
      popularity: 1136.358,
      poster_path: '/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg',
      release_date: '2023-04-21',
      title: 'Evil Dead Rise',
      video: false,
      vote_average: 7.1,
      vote_count: 356,
    },
    {
      adult: false,
      backdrop_path: '/kZ7unRnWe8UwpJsc1n5venXr9u2.jpg',
      genre_ids: [18, 28],
      id: 619329,
      original_language: 'Tamil',
      original_title: 'முந்திரிக்காடு',
      overview:
        'In a Village Where they used to Honor Kill Love couples of the opposite cast and in that village A girl and boy from the opposite cast who used to be friends are getting pressure from village people that they love each other . What happens at the End?\r Whether they succeed or not is the story.',
      popularity: 138.808,
      poster_path: '/k7iEwxmphkr1bwb66CHA4dhyyBF.jpg',
      release_date: '2023-04-07',
      title: 'Munthiri Kaadu',
      video: false,
      vote_average: 2,
      vote_count: 1,
    },
    {
      adult: false,
      backdrop_path: '/dWwcwqAOkS6e4GCRJ5fC9iSVx9O.jpg',
      genre_ids: [28, 12, 18, 36],
      id: 858082,
      original_language: 'Tamil',
      original_title: 'பொன்னியின் செல்வன்: பாகம் 2',
      overview:
        'Arulmozhi Varman continues on his journey to become Rajaraja I, the greatest ruler of the historic Chola empire of South India.',
      popularity: 47.466,
      poster_path: '/1fMM5yjLYJNfO3CSQBpfC1kqeIK.jpg',
      release_date: '2023-04-28',
      title: 'Ponniyin Selvan: Part II',
      video: false,
      vote_average: 7.3,
      vote_count: 13,
    },
    {
      adult: false,
      backdrop_path: '/sv7JscTpQv8K7XnRwnbKQsCP3N9.jpg',
      genre_ids: [18],
      id: 939423,
      original_language: 'Hindi',
      original_title: 'अफ़वाह',
      overview:
        'Rahab - a top advertising professional and Nivi - a political heiress, find no place to hide as they get entangled in a vicious rumour created by the social media machinery.',
      popularity: 30.002,
      poster_path: '/ctz7lT3HX78AACZM9LeW0gmjxLJ.jpg',
      release_date: '2023-05-05',
      title: 'Afwaah',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [35, 18],
      id: 946297,
      original_language: 'Malayalam',
      original_title: 'ചാൾസ് എന്റർപ്രൈസസ്',
      overview: 'It is a finesest horror',
      popularity: 25.969,
      poster_path: '/bnVRLe76H5Fpg135i0HEV7gvn2K.jpg',
      release_date: '2023-05-05',
      title: 'Charles Enterprises',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [],
      id: 1085258,
      original_language: 'Bengali',
      original_title: 'কীর্তন',
      overview: 'Under wraps.',
      popularity: 24.603,
      poster_path: '/bnVRLe76H5Fpg135i0HEV7gvn2K.jpg',
      release_date: '2023-05-05',
      title: 'Kirtan',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: '/tqQNfBHzAqWXbjD2pKFdZTMrQHs.jpg',
      genre_ids: [28, 35],
      id: 1074641,
      original_language: 'Telugu',
      original_title: 'రామబాణం',
      overview:
        "Years after running away from his pacifist brother Rajaram, Vicky lives as a gangster in Kolkata. When Vicky returns home, Rajaram's organic food business empire is in the doldrums because his rival GK is conspiring against it. Can Vicky save his brother's business in time and teach GK a lesson?",
      popularity: 32.32,
      poster_path: '/gYpJc2TdwJugZF3cG7o7HWwixQy.jpg',
      release_date: '2023-05-05',
      title: 'Ramabanam',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: '/eDVKLzqpNlLx1gzzMaGuqeAxGbQ.jpg',
      genre_ids: [28, 53],
      id: 1069937,
      original_language: 'Telugu',
      original_title: 'ఉగ్రం',
      overview:
        'CI Shivakumar,a brash police officer, handles a lot of missing cases which has caused great strain on his marriage life. After a serious accident,Shiva admits his wife Aparna and daughter Lucky in hospital, only to find them missing next day. Will Shiva solve the mystery despite suffering from a serious medical condition?',
      popularity: 28.13,
      poster_path: '/cnsJnyCUefcHDQT1OnFgUOSR2nR.jpg',
      release_date: '2023-05-05',
      title: 'Ugram',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: '/ajrV6MRDZ535UsUsqziZqghRKVM.jpg',
      genre_ids: [28, 18, 10749],
      id: 1112505,
      original_language: 'Tamil',
      original_title: 'குலசாமி',
      overview:
        'Soora Sangu, an auto-rickshaw driver, struggling to cope with post a personal loss, decides to fight against the social evils that exploit women sexually.',
      popularity: 25.972,
      poster_path: '/oNHofVvUfdzVEkTCWodt87x5VlD.jpg',
      release_date: '2023-05-05',
      title: 'Kulasami',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [36],
      id: 994290,
      original_language: 'Bengali',
      original_title: 'শিবপুর',
      overview:
        'Left Front vs Indian National Congress Party. struggling to cope with post a personal loss, decides to fight against the social evils that exploit women sexually.',
      popularity: 23.705,
      poster_path: '/sCT8M6ellnQysIERqqIbEbymMGc.jpg',
      release_date: '2023-05-05',
      title: 'Shibpur',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [35],
      id: 1071249,
      original_language: 'Malayalam',
      original_title: 'വാലാട്ടി',
      overview:
        'Soora Sangu, an auto-rickshaw driver, struggling to cope with post a personal loss, decides to fight against the social evils that exploit women sexually.',
      popularity: 26.216,
      poster_path: '/cMwow5tasnOIj27ozjRk15mmozz.jpg',
      release_date: '2023-05-05',
      title: 'Valatty',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [12],
      id: 1015580,
      original_language: 'Malayalam',
      original_title: 'ഖജുരാഹോ Dreams',
      overview:
        'It is an Inspirational based movie on theft and police officier. ',
      popularity: 24.305,
      poster_path: '/xgIbeYWlfzSGHJ8VtawQ4rf52a7.jpg',
      release_date: '2023-05-05',
      title: 'Khajuraho Dreams',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [12, 9648],
      id: 1118467,
      original_language: 'Bengali',
      original_title: 'মাস্টার অংশুমান',
      overview:
        'Danger in Darjeeling. struggling to cope with post a personal loss, decides to fight against the social evils that exploit women sexually.',
      popularity: 23.386,
      poster_path: '/oNHofVvUfdzVEkTCWodt87x5VlD.jpg',
      release_date: '2023-05-05',
      title: 'Master Anshuman',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: '/kBdsmOM3QU8bLrATyH0LQ9GWNpV.jpg',
      genre_ids: [10749, 28, 35],
      id: 966719,
      original_language: 'Hindi',
      original_title: 'किसी का भाई... किसी की जान',
      overview:
        "Bhaijaan, a self-defense trainer lives happily as a bachelor with his three brothers Moh, Ishq and Luv and uses violence to settle disputes. When his brothers, who’ve already found partners, come together to fix a match for him, Bhagya Lakshmi, Bhaijaan decides to mend his ways for his lover's sake. All hell breaks loose when he learns about Bhagya's family facing threats from their haunting past.",
      popularity: 15.87,
      poster_path: '/yJ2JqgfWniQLnXPM5WkM7f1rqaY.jpg',
      release_date: '2023-04-21',
      title: 'Kisi Ka Bhai... Kisi Ki Jaan',
      video: false,
      vote_average: 6.2,
      vote_count: 5,
    },
    {
      adult: false,
      backdrop_path: '/15z4HnocYG7qmgN9R5x4TzA8xlw.jpg',
      genre_ids: [28],
      id: 1034187,
      original_language: 'Telugu',
      original_title: 'ధీర',
      overview:
        'struggling to cope with post a personal loss, decides to fight against the social evils that exploit women sexually.',
      popularity: 20.664,
      poster_path: '/w6ApC28wZTTWFPFdQGW5elpGP70.jpg',
      release_date: '2023-05-05',
      title: 'Dheera',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: '/hcqY0Er8AhU3UiSAxB5tT6sBiZv.jpg',
      genre_ids: [28, 53],
      id: 885184,
      original_language: 'Telugu',
      original_title: 'దసరా',
      overview:
        "In 1990s, Set in small village Veerlapally, Dharani, Vennela, and Suri are childhood friends. Dharani loves Vennela, but she has Suri in her mind. Knowing Suri’s interest in Vennela, Dharani sacrifices his love and helps get them married. But Local politics between Rajanna, Shivanna and the latter's son Chinna Nambi threaten to disrupt their lives.",
      popularity: 11.3,
      poster_path: '/xgIbeYWlfzSGHJ8VtawQ4rf52a7.jpg',
      release_date: '2023-03-30',
      title: 'Dasara',
      video: false,
      vote_average: 9,
      vote_count: 1,
    },
  ];
  const languages = [
    {
      id: '0',
      language: 'English',
    },
    {
      id: '1',
      language: 'Telugu',
    },
    {
      id: '2',
      language: 'Hindi',
    },
    {
      id: '3',
      language: 'Tamil',
    },
    {
      id: '5',
      language: 'Malayalam',
    },
    {
      id: '6',
      language: 'Kannada',
    },
  ];
  const genres = [
    {
      id: '0',
      language: 'Horror',
    },
    {
      id: '1',
      language: 'Comedy',
    },
    {
      id: '2',
      language: 'Action',
    },
    {
      id: '3',
      language: 'Romance',
    },
    {
      id: '5',
      language: 'Thriller',
    },
    {
      id: '6',
      language: 'Drama',
    },
  ];
  return (
    <View>
      <FlatList
        numColumns={2}
        ListHeaderComponent={Header}
        columnWrapperStyle={styles.columns}
        data={movieData}
        renderItem={({item, index}) => <MovieCard item={item} key={index} />}
      />
      <Pressable
        style={styles.filterContainer}
        onPress={() => setModalVisibility(!modalVisibility)}>
        <Icon name="funnel-outline" size={28} color="#fff" />
      </Pressable>
      <Modal
        onBackdropPress={() => setModalVisibility(!modalVisibility)}
        swipeDirection={['up', 'down']}
        swipeThreshold={200}
        deviceWidth={deviceWidth}
        deviceHeight={deviceHeight}
        isVisible={modalVisibility}
        onBackButtonPress={() => setModalVisibility(!modalVisibility)}>
        <View style={styles.modal}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>Filters</Text>
            <Pressable onPress={() => setModalVisibility(!modalVisibility)}>
              <Icon name="close-outline" size={28} color="#BD1E1E" />
            </Pressable>
          </View>
          <View style={styles.modalContent}>
            <View style={styles.languagesContainer}>
              <Text style={styles.filterContentTitle}>Languages</Text>
              <View style={styles.languages}>
                {languages.map((lang, index) => (
                  <Badges key={index} item={lang} />
                ))}
              </View>
            </View>
            <View style={styles.genersContainer}>
              <Text style={styles.filterContentTitle}>Geners</Text>
              <View style={styles.geners}>
                {genres.map((lang, index) => (
                  <Badges key={index} item={lang} />
                ))}
              </View>
            </View>
          </View>
          <View style={styles.modalFooter}>
            <Pressable style={styles.modalFooterCta}>
              <Text style={styles.modalFooterText}>Apply</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  cityname: {
    fontSize: 17,
    fontWeight: '700',
  },
  columns: {
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  filterContainer: {
    backgroundColor: '#BD1E1E',
    position: 'absolute',
    right: 20,
    bottom: 30,
    padding: 10,
    width: 70,
    height: 70,
    borderRadius: 35,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalHeaderTitle: {
    fontSize: 17,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  modalContent: {
    padding: 15,
  },
  filterContentTitle: {
    fontSize: 17,
    fontWeight: '500',
    textTransform: 'capitalize',
    color: '#888',
    marginBottom: 8,
  },
  languagesContainer: {
    flexDirection: 'column',
    gap: 5,
  },
  languages: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  genersContainer: {
    flexDirection: 'column',
    gap: 5,
    marginVertical: 20,
  },
  geners: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  modalFooter: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    alignItems: 'flex-end',
  },
  modalFooterCta: {
    backgroundColor: '#BD1E1E',
    borderRadius: 8,
    padding: 10,
    width: 100,
    margin: 10,
  },
  modalFooterText: {
    fontSize: 16,
    fontWeight: '500',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#fff',
  },
});
