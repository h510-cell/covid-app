import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BedAvabilityScreen from '../screens/BedAvabilityScreen';
import HospitalsNearMeScreen from '../screens/HospitalsNearMeScreen';

export const appTabNavigator = createBottomTabNavigator({
    BedAvability : {
       screen: BedAvabilityScreen,
       navigationOptions: {
           tabBarIcon : <Image source={require("../assets/Beds.png")} style={{width:20, height:20}} />,
           tabBarLabel : "BedsAvaibility"
       }
    },
    HospitalsNearMe : {
        screen: HospitalsNearMeScreen,
        navigationOptions: {
            tabBarIcon : <Image source={require("../assets/Hospitals.png")} style={{width:20, height:20}} />,
            tabBarLabel : "Hospitals Near Me"
        }
     }
})