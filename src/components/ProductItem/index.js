import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import defaultImg from '../../assets/Dummy/default.png'

const ProductItem = () => {
   return (
      <View style={styles.containerProduct}>
         <Image source={defaultImg} style={styles.imageProduct} />
         <View style={styles.containerTextProduct}>
            <Text>Nama Barang - kode</Text>
            <Text style={{ fontWeight: 'bold' }}>Rp 10.000</Text>
            <Text>Discount 10%</Text>
         </View>
      </View>
   )
}

export default ProductItem

const styles = StyleSheet.create({
   containerProduct: {
      backgroundColor: '#fff',
      elevation: 3,
      borderRadius: 10,
      paddingHorizontal: 20,
      marginHorizontal: 15,
      marginVertical: 10,
      height: 100,
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
