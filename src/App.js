import 'react-native-gesture-handler';
import React from 'react';
import { SplashScreen, ListProduct, Transaction, DetailProduct, Home } from './pages';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <SplashScreen /> */}
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Detail Produk" component={DetailProduct} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
