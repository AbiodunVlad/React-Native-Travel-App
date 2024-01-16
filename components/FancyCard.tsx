import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://eeward.com/wp-content/uploads/2022/10/columbus.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <View>
            <Text style={styles.cardTitle}>Columbus</Text>
            <Text style={styles.cardLabel}>Ohio, USA</Text>
            <Text style={styles.cardDescription}>
              A beautiful city to leave in.
            </Text>
          </View>
          <View style={styles.cardBodyTwo}>
            <Text style={styles.cardFooter}>22 days' walk.</Text>
          </View>
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
    marginTop: 10,
  },
  card: {
    width: 320,
    height: 350,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 20,
  },
  cardElevated: {
    backgroundColor: '#fff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#333',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  cardLabel: {
    color: '#333',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#242b2e',
    fontSize: 12,
    marginTop: 12,
    marginBottom: 12,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#333',
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardBodyTwo: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
