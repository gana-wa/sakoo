import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import defaultImg from '../../assets/Dummy/default.png'

const ProductItem = ({ navigation, productName, price, discount, image }) => {
   return (
      <Pressable onPress={() => navigation.navigate("Detail Produk")}>
         <View style={styles.containerProduct}>
            <Image source={{ uri: image }} style={styles.imageProduct} />
            <View style={styles.containerTextProduct}>
               <Text>{productName}</Text>
               <Text style={{ fontWeight: 'bold' }}>{`Rp ${price}`}</Text>
               <Text>{discount}</Text>
            </View>
         </View>
      </Pressable>
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
