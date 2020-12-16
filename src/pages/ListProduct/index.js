import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
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
      <ProductItem productName={item.name} image={item.image} price={item.price} discount={item.voucher ? (item.voucher.name) : (null)} navigation={navigation} />
   );

   const productReducer = useSelector(state => state.productReducer.product)

   return (
      <SafeAreaView>
         <FlatList
            data={productReducer}
            renderItem={renderItem}
         />
      </SafeAreaView>
   )
}

export default ListProduct

const styles = StyleSheet.create({})
