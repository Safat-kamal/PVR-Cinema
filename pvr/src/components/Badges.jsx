import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';

const Badges = ({item}) => {
  return (
    <Pressable style={styles.badge}>
      <Text style={styles.badgeText}>{item.language}</Text>
    </Pressable>
  );
};

export default Badges;

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#BD1E1E',
    borderRadius: 10,
    flexWrap: 'wrap',
  },
  badgeText: {
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'uppercase',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});
