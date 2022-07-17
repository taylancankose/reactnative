import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JobDetails from './pages/JobDetails';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const JobStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Jobs"
        component={Home}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Jobs',
        }}
      />
      <Stack.Screen name="JobDetails" component={JobDetails} />
    </Stack.Navigator>
  );
};

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={JobStack} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default Router;
