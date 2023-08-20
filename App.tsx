import React, {useEffect, useState} from 'react';

import {
  Dimensions,
  Platform,
  SafeAreaView,
  SafeAreaViewBase,
  SafeAreaViewComponent,
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

import Button from './src/components/@core/Button';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View style={styles.containerView}>
        <View style={styles.sectionTitleView}>
          <Text style={styles.sectionTitleText}>TodoList - RN</Text>
        </View>
        <View style={styles.listContainer}>
          <View style={styles.listItem}>
            <View style={styles.dotStyle}></View>
            <Text style={styles.listItemText}>asf</Text>
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: 10}}>
          <Button
            style={{
              width: 180,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            + New Task
          </Button>
        </View>
      </View>
      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: 'rgb(223 230 253)',
  },
  containerView: {
    flex: 1,
    padding: 30,
  },
  sectionTitleView: {
    marginBottom: 30,
    padding: 10,
    backgroundColor: 'rgb(159 121 255)',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  sectionTitleText: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: '700',
    color: '#fff',
  },

  listContainer: {
    display: 'flex',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    position: 'relative',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  listItemText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'rgb(152 161 187)',
  },
  dotStyle: {
    borderRadius: 50,
    width: 8,
    height: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'rgb(152 161 187)',
    borderStyle: 'solid',
  },
  buttonStyle: {
    backgroundColor: 'rgb(159 121 255)',
  },
});

export default App;
