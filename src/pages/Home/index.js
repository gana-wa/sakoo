import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { ListProduct, Transaction } from '../';
import { Header } from '../../components';
import ListProduct from '../ListProduct';
import Transaction from '../Transaction';


const Tab = createMaterialTopTabNavigator();

const Home = () => {
   return (
      <>
         <Header headerText="Home" />
         <Tab.Navigator>
            <Tab.Screen name="Produk" component={ListProduct} />
            <Tab.Screen name="Trasaksi" component={Transaction} />
         </Tab.Navigator>
      </>
   )
}

export default Home

const styles = StyleSheet.create({})
