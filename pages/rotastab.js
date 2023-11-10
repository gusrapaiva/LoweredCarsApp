import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {MaterialComunnityIcons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './home';
import NaoseiScreen from './naosei';
import Naosei2Screen from './naosei2';

const HomeName = 'Home';
const NaoseiName = 'Naosei';
const Naosei2Name = 'Naosei2';


const Tab = createBottomTabNavigator();

export default function MainContainer(){
  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName={HomeName} screenOptions={{ headerShown: false }} >
        <Tab.Screen name={Naosei2Name} component={Naosei2Screen} options={{tabBarIcon: ({color, size})=> <MaterialCommunityIcons name="car-arrow-left" color={color} size={size}/> }}/>

        <Tab.Screen name={HomeName} component={HomeScreen} options={{tabBarIcon: ({color, size})=> <MaterialCommunityIcons name="home" color={color} size={size}/> }} />

        <Tab.Screen name={NaoseiName} component={NaoseiScreen} options={{tabBarIcon: ({color, size})=> <MaterialCommunityIcons name="car-arrow-right" color={color} size={size}/> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
