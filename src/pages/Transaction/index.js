import React from 'react'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { TransactionItem } from '../../components';

const DATA = [
   {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      productName: 'First Item',
      price: "10.000",
   },
   {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      productName: 'Second Item',
      price: "10.000",
   },
   {
      id: '1',
      productName: 'Third Item',
      price: "10.000",
   },
];

const Transaction = ({ navigation }) => {
   const renderItem = ({ item }) => (
      <TransactionItem productName={item.productName} price={item.price} navigation={navigation} />
   );
   return (
      <SafeAreaView>
         <FlatList
            data={DATA}
            renderItem={renderItem}
         />
      </SafeAreaView>
   )
}

export default Transaction

const styles = StyleSheet.create({})
