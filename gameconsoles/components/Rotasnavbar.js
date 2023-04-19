import * as React from 'react';
import {} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Odyssey from './Odyssey';
import Atari from './Atari';
import Nes from './Nes';

const Tab = createBottomTabNavigator();

export default function Rotasnavbar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Odyssey"
        component={Odyssey}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="games" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Atari 2600"
        component={Atari}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="games" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="NES"
        component={Nes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="games" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
