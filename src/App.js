import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import { DetailProduct, Home, Cart } from './pages';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <SplashScreen /> */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Detail Produk" component={DetailProduct} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
