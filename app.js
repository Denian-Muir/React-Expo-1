import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutMe from './screens/AboutMe';
import MyLanguages from './screens/MyLanguages';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="О Себе" component={AboutMe} />
                <Tab.Screen name="Мои языки программирования" component={MyLanguages} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
