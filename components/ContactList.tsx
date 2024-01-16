import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Danyal Silva',
      status: 'Just a travel enthusiast',
      imageUrl:
        'https://i.pinimg.com/474x/25/3a/bf/253abf4f1f4bc16b6dc04571f8d21624.jpg',
    },
    {
      uid: 2,
      name: 'Sonny Lozano',
      status: 'I ❤️ to explore new places',
      imageUrl:
        'https://media.licdn.com/dms/image/D5603AQGyxuoA7nK7Bw/profile-displayphoto-shrink_400_400/0/1680118321125?e=2147483647&v=beta&t=tzxtxA92TrnR4Wo4aUYYRS7V78mKGS7qe3UYOVGBMTY',
    },
    {
      uid: 3,
      name: 'Jared Mccarty',
      status: 'Making your travel smooth',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoq0f1tSU2b8opZaApGh5tl2FreFb52dyo6Q&usqp=CAU',
    },
    {
      uid: 4,
      name: 'Eesa Oliver',
      status: 'Building secure tourism channels',
      imageUrl: 'https://xsgames.co/randomusers/assets/avatars/male/46.jpg',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Our Advisors</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
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
  },
  container: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 5,
    backgroundColor: '#8D3dAF',
    padding: 4,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  userStatus: {
    fontSize: 12,
  },
});
