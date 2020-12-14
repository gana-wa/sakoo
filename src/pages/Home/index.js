import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ListProduct, Transaction } from '..';


const Tab = createMaterialTopTabNavigator();

const Home = () => {
   return (
      <>
         <View>
            <Text>Test</Text>
         </View>
         <Tab.Navigator>
            <Tab.Screen name="Produk" component={ListProduct} />
            <Tab.Screen name="Trasaksi" component={Transaction} />
         </Tab.Navigator>
      </>
   )
}

export default Home

const styles = StyleSheet.create({})
