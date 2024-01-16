import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog </Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            You Want to Explore More Places?
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/18148936/pexels-photo-18148936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={2}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            praesentium doloribus iste exercitationem! Quae provident pariatur
            nisi! Numquam mollitia voluptatum explicabo ducimus expedita harum
            exercitationem, quia suscipit doloribus incidunt? Nulla?
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://www.successconsciousness.com/blog/category/travel/',
              )
            }>
            <Text style={styles.socialLinks}>Read more</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.linkedin.com/in/abiodun-omonijo/')
            }>
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
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
  },
  card: {
    width: 350,
    height: 340,
    marginVertical: 12,
    marginHorizontal: 5,
    marginLeft: 5,
    marginRight: 15,
    // paddingHorizontal: 20,
    borderRadius: 10,
  },
  cardElevated: {
    backgroundColor: '#E07624',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 190,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 14,
    color: '#333',
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 4,
  },
});
