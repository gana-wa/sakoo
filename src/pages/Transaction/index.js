import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TransactionItem } from '../../components';
import { fetchTransaction, getMoreTransaction } from '../../redux/actions/product';


const Transaction = ({ navigation }) => {
   const dispatch = useDispatch();

   const id = 'udin10101997';

   useEffect(() => {
      dispatch(fetchTransaction(id));
   }, [])

   const [page, setPage] = useState(2);


   const getMoreTransactionFunc = () => {
      setPage(page + 1);
      dispatch(getMoreTransaction(id, page));
   };

   const listTransaction = useSelector(state => state.productReducer.transaction)

   const renderItem = ({ item }) => (
      <TransactionItem invoice={item.invoice_number} itemId={item.id} price={item.total_price} date={item.updated_at} navigation={navigation} transactionId={item.id} />
   );
   return (
      <SafeAreaView>
         <FlatList
            data={listTransaction}
            renderItem={renderItem}
            onEndReached={getMoreTransactionFunc}
            onEndReachedThreshold={0.5}
         />
      </SafeAreaView>
   )
}

export default Transaction

const styles = StyleSheet.create({})
