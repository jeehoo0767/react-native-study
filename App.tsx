/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  Dimensions,
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

const {width: SCREEN_WIDTH} = Dimensions.get('window');

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

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
