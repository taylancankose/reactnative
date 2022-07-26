import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Home from './pages/Home/Home';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Main from './pages/Main';
import {Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import RoomDetails from './pages/RoomDetails/RoomDetails';

const Stack = createNativeStackNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  useEffect(() => {
    auth().onAuthStateChanged(info => {
      setIsLoggedIn(!!info);
    });
  }, []);
  console.log(isLoggedIn);
  const AuthStack = () => {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: '',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
            headerTransparent: true,
          }}
          name="Register"
          component={Register}
        />
      </Stack.Navigator>
    );
  };
  const handleLogout = () => {
    auth().signOut();
  };
  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Auth"
            component={AuthStack}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              headerRight: () => <Text onPress={handleLogout}>Logout</Text>,
            }}
          />
          <Stack.Screen
            name="RoomDetails"
            component={RoomDetails}
            options={{
              headerRight: () => <Text onPress={handleLogout}>Logout</Text>,
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
