import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import defaultImg from '../../assets/Dummy/default.png';

const CartItem = ({ product }) => {
   return (
      <View style={styles.containterStore}>
         <View style={styles.containerItemList}>
            <View style={styles.containerProduct}>
               <Image source={defaultImg} style={styles.imageProduct} />
               <View style={styles.containerTextProduct}>
                  <Text>{product.name}</Text>
                  <Text style={{ fontWeight: 'bold' }}>{`Rp 10000`}</Text>
                  <Text>{`Discount ${product.discount}%`}</Text>
               </View>
            </View>
         </View>
      </View>
   )
}

export default CartItem

const styles = StyleSheet.create({
   containterStore: {
      // flex: 1,
   },
   containerItemList: {
      marginHorizontal: 10,
      backgroundColor: '#fff',
      // borderRadius: 10,
   },
   containerProduct: {
      // backgroundColor: '#fff',
      // elevation: 3,
      // borderRadius: 10,
      paddingHorizontal: 20,
      // marginHorizontal: 15,
      marginVertical: 10,
      // height: 100,
      // flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
   },
   imageProduct: {
      width: 80,
      height: 80,
      borderRadius: 5,
   },
   containerTextProduct: {
      marginLeft: 20,
      height: 70,
      justifyContent: 'space-between',
   },
})
