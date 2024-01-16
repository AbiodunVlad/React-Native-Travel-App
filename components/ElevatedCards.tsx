import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Why travel, really?</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.boxText}>Improved Perspective</Text>
          <Text>😍</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.boxText}>Cultural Enrichment</Text>
          <Text>🥂</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.boxText}>Opportunities</Text>
          <Text>👨🏾‍💻</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.boxText}>Health Benefits</Text>
          <Text>👩🏾‍⚕️</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.boxText}>Tourism</Text>
          <Text>🚢</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.boxText}>Education</Text>
          <Text>🎓</Text>
        </View>
      </ScrollView>
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
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: '#FFF8E3',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
  },
  boxText: {
    color: '#333',
    textAlign: 'center',
  },
});
