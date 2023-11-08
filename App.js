import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            source={{
              uri: 'https://seeklogo.com/images/E/expo-go-app-logo-BBBE394CB8-seeklogo.com.png',
            }}
            style={styles.logo}
          />
          <Text style={styles.headerText}>Expo Go</Text>
        </View>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW0jkPVhXxxr1i_bplADEENs3OpuCchMBIrw&usqp=CAU',
          }}
          style={styles.headerContentLogo}
        />
      </View>
      <View style={styles.subHeader}>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/93172838?s=280&v=4',
          }}
          style={styles.sublogo}
        />
        <Text style={styles.subHeaderText}>Development servers</Text>
      </View>
      <View style={styles.appCard}>
        <View style={styles.appInfo}>
          <Text style={styles.appDescription}>
            Press here to sign in to your Expo account and see the projects you have recently been working on.
          </Text>
        </View>
      </View>
      <View style={styles.appCard1}>
        <View style={styles.appInfo1}>
          <Text style={styles.appDescription1}>Enter URL manually</Text>
        </View>
      </View>
      <View style={styles.appCard2}>
        <View style={styles.appInfo2}>
          <Text style={styles.appDescription2}>Scan QR code</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // To move content to the right
    paddingVertical: 12,
    paddingHorizontal: 16, // Add some padding for the content logo
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  headerContent: {
    flexDirection: 'row', // Allows logo and text to be in a row
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
  },
  headerText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10, // Add margin to separate the logo and text
  },
  headerContentLogo: {
    width: 25,
    height: 25,
  },
  subHeaderText: {
    fontSize: 15,
    paddingHorizontal: 16,
    paddingTop: 16,
    fontWeight: 'bold',
  },
  appCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  appCard1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 0,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  appCard2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 0,
    padding: 18,
    backgroundColor: '#fff',
    borderRadius: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  appInfo: {
    flex: 1,
  },
  appDescription: {
    fontSize: 19,
    color: 'black',
  },
  appDescription1: {
    fontSize: 19,
    color: 'black',
  },
  appDescription2: {
    fontSize: 19,
    color: 'black',
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align logo and text to the left
    backgroundColor: 'white', // Set to transparent
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  sublogo: {
    width: 23,
    height: 23,
    marginRight: 10,
    borderRadius: 4,
  },
  subHeaderText: {
    fontSize: 15,
    color: 'grey',
    fontWeight: 'bold',
  },
});
