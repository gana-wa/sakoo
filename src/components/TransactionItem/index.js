import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import defaultImg from '../../assets/Dummy/default.png'
import moment from 'moment'

const TransactionItem = ({ navigation, invoice, price, date, itemId }) => {
   return (
      <Pressable onPress={() => navigation.navigate('Detail Transaksi', { itemId: itemId })}>
         <View style={styles.containerProduct}>
            <View style={styles.containerTextProduct}>
               <Text style={styles.textItem}>{invoice}</Text>
               <Text style={{ ...styles.textItem, fontWeight: 'bold' }}>{`Rp ${price.toLocaleString('id-ID')}`}</Text>
            </View>
            <View>
               <Text style={styles.textItem}>{moment(date).format("D MMMM YYYY")}</Text>
            </View>
         </View>
      </Pressable>
   )
}

export default TransactionItem

const styles = StyleSheet.create({
   containerProduct: {
      backgroundColor: '#fff',
      elevation: 3,
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 20,
      marginHorizontal: 15,
      marginVertical: 10,
      height: 100,
      // flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      // alignItems: 'center',
   },
   containerTextProduct: {
      // marginLeft: 20,
      // height: 70,
      justifyContent: 'space-between',
   },
   textItem: {
      fontSize: 16,
   }
})
