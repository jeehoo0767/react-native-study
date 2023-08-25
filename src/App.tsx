import React from 'react';

import {StatusBar} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar barStyle="default" />
    </>
  );
}

export default App;
