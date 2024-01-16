import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Happiness Travels</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.leadText}>The</Text>
          <Text>😍😍😍</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.leadText}>Happy</Text>
          <Text>😍😍😍</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.leadText}>People</Text>
          <Text>😍😍😍</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
    // color: '#fff',
  },
  leadText: {
    fontSize: 18,
    fontWeight: '600',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },

  card: {
    width: 100,
    height: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    borderRadius: 5,
  },

  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'green',
  },
});
