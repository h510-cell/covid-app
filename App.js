import React from 'react';
import { StyleSheet, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {appTabNavigator} from './components/appTabNavigator'
import WelcomeScreen from './screens/WelcomeScreen'


export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}

const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen: {screen:WelcomeScreen},
  BottomTab : {screen:appTabNavigator}
})

const AppContainer = createAppContainer(SwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
