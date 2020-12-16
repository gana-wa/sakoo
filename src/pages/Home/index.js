import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { ListProduct, Transaction } from '../';
import { Header } from '../../components';
import ListProduct from '../ListProduct';
import Transaction from '../Transaction';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchProduct } from '../../redux/actions/product';

const Tab = createMaterialTopTabNavigator();

const Home = ({ navigation }) => {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(fetchProduct());
   }, []);
   return (
      <>
         <Header headerText="Home" navigation={navigation} />
         <Tab.Navigator>
            <Tab.Screen name="Produk" component={ListProduct} />
            <Tab.Screen name="Trasaksi" component={Transaction} />
         </Tab.Navigator>
      </>
   )
}

export default Home

const styles = StyleSheet.create({})
