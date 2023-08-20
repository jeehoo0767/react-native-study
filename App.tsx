import React, {useEffect, useState} from 'react';
// import type {PropsWithChildren} from 'react';
import {
  Dimensions,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Geolocation from 'react-native-geolocation-service';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [locations, setLocations] = useState<{
    latitude: number;
    longitude: number;
  }>();

  const requestLocationPermissionIOS = async () => {
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
      return true;
    }

    if (status === 'denied') {
      console.error('Location permission denied');
    }
  };

  const hasLocationPermission = async () => {
    const hasPermission = await requestLocationPermissionIOS();
    return hasPermission;
  };

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();
    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        const {latitude, longitude} = position.coords;
        console.log(latitude);
        setLocations({
          latitude,
          longitude,
        });
      },
      error => {
        console.error(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: true,
        forceLocationManager: true,
        showLocationDialog: true,
      },
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View style={styles.locationView}>
        <Text style={styles.locationText}>Seoul</Text>
      </View>
      <View style={styles.scrollView}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}>
          <View style={styles.dayView}>
            <Text style={styles.weatherTempText}>27</Text>
            <Text style={styles.weatherDescText}>Sunny</Text>
          </View>
          <View style={styles.dayView}>
            <Text style={styles.weatherTempText}>27</Text>
            <Text style={styles.weatherDescText}>Sunny</Text>
          </View>
          <View style={styles.dayView}>
            <Text style={styles.weatherTempText}>27</Text>
            <Text style={styles.weatherDescText}>Sunny</Text>
          </View>
          <View style={styles.dayView}>
            <Text style={styles.weatherTempText}>27</Text>
            <Text style={styles.weatherDescText}>Sunny</Text>
          </View>
          <View style={styles.dayView}>
            <Text style={styles.weatherTempText}>27</Text>
            <Text style={styles.weatherDescText}>Sunny</Text>
          </View>
          <View style={styles.dayView}>
            <Text style={styles.weatherTempText}>27</Text>
            <Text style={styles.weatherDescText}>Sunny</Text>
          </View>
          <View style={styles.dayView}>
            <Text style={styles.weatherTempText}>27</Text>
            <Text style={styles.weatherDescText}>Sunny</Text>
          </View>
        </ScrollView>
      </View>
      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  locationView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 42,
    fontWeight: '700',
  },
  scrollView: {
    flex: 2,
  },
  dayView: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  weatherTempText: {
    fontSize: 56,
    fontWeight: '700',
  },
  weatherDescText: {
    fontSize: 28,
  },
});

export default App;
