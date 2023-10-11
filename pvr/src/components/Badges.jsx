import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';

const Badges = ({item, selected, setChoosedFiltter, setApplyCtaActive}) => {
  const pressHandler = () => {
    setChoosedFiltter(item.language);
    setApplyCtaActive(true);
  };

  return selected ? (
    <Pressable style={styles.badgeActive} onPress={() => pressHandler()}>
      <Text style={[styles.badgeText, styles.badgeActiveText]}>
        {item.language}
      </Text>
    </Pressable>
  ) : (
    <Pressable style={styles.badgeInactive} onPress={() => pressHandler()}>
      <Text style={styles.badgeText}>{item.language}</Text>
    </Pressable>
  );
};

export default Badges;

const styles = StyleSheet.create({
  badgeInactive: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#BD1E1E',
    borderRadius: 10,
    flexWrap: 'wrap',
  },
  badgeActive: {
    flexDirection: 'row',
    backgroundColor: '#BD1E1E',
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
  badgeActiveText: {
    color: '#fff',
  },
});
