import React, { useEffect } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import defaultImg from '../../assets/Dummy/default.png'
import { Header } from '../../components'
import { fetchProductDetail } from '../../redux/actions/product'

const DetailProduct = ({ navigation, route }) => {
   const { productId } = route.params;
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(fetchProductDetail(productId));
   }, []);
   const product = useSelector(state => state.productReducer.productDetail);
   const discount = product.voucher ? (Number(product.price - (product.price * (product.voucher.value / 100))).toLocaleString('id-ID')) : ('');
   return (
      <SafeAreaView style={styles.containerMain}>
         <Header headerText="Detail Produk" canGoBack={true} navigation={navigation} />
         <Image source={{ uri: product.image }} style={{ height: 300, width: '100%' }} />
         <View style={styles.containerItem}>
            <Text style={styles.textName}>{`${product.name} - ${product.code}`}</Text>
            <Text style={styles.textName, { fontWeight: 'bold' }}>{`Rp ${product.price.toLocaleString('id-ID')} - ${discount}`}</Text>
            <Text style={styles.textName}>{`${product.store.name} - ${product.store.province}`}</Text>
            <Text style={styles.textName}>{`${product.description}`}</Text>
         </View>
         <View style={styles.containerCounter}>
            <TouchableHighlight style={styles.buttonCounterDisabled}>
               <Text style={styles.buttonCounterText}>-</Text>
            </TouchableHighlight>
            <Text style={styles.textCounter}>1</Text>
            <TouchableHighlight style={styles.buttonCounter}>
               <Text style={styles.buttonCounterText}>+</Text>
            </TouchableHighlight>
         </View>
         <View style={styles.containerCartButton}>
            <TouchableOpacity>
               <View style={styles.buttonAddToCart}>
                  <Text style={styles.buttonAddToCartText}>Tambah ke Keranjang</Text>
               </View>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   )
}

export default DetailProduct

const styles = StyleSheet.create({
   containerMain: {
      flex: 1,
   },
   containerItem: {
      // flex: 4,
      paddingHorizontal: 10,
   },
   textName: {
      marginVertical: 10,
   },
   containerCounter: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      // backgroundColor: 'grey',
      justifyContent: 'flex-end',
   },
   buttonCounterDisabled: {
      backgroundColor: '#bdc3c7',
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
   },
   buttonCounter: {
      backgroundColor: '#e74c3c',
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
   },
   buttonCounterText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
   },
   textCounter: {
      marginHorizontal: 15,
      fontSize: 20,
      // fontWeight: 'bold',
   },
   containerCartButton: {
      flex: 1,
      justifyContent: 'center',
   },
   buttonAddToCart: {
      // flex: 1,
      // height: '100%',
      borderRadius: 10,
      marginHorizontal: 10,
      backgroundColor: '#e74c3c',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
   },
   buttonAddToCartText: {
      fontSize: 20,
      // fontWeight: 'bold',
      color: '#fff',
   },
})
