import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { ProductItem } from '../../components';

const DATA = [
   {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      productName: 'First Item',
      price: 10000,
   },
   {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      productName: 'Second Item',
      price: 10000,
   },
   {
      id: '1',
      productName: 'Third Item',
      price: 10000,
   },
];


const ListProduct = ({ navigation }) => {
   const renderItem = ({ item }) => (
      <ProductItem productName={item.productName} price={item.price} navigation={navigation} />
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

export default ListProduct

const styles = StyleSheet.create({})
