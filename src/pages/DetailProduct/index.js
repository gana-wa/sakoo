import React, { useEffect, useState } from 'react'
import { ToastAndroid } from 'react-native'
import { Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import defaultImg from '../../assets/Dummy/default.png'
import { Header } from '../../components'
import { addToCart, fetchProductDetail, addProductToCart } from '../../redux/actions/product'

const DetailProduct = ({ navigation, route }) => {
   const { productId } = route.params;

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchProductDetail(productId));
   }, []);

   const [quantity, setQuantity] = useState(1);
   const [form, setForm] = useState();

   const product = useSelector(state => state.productReducer.productDetail);
   const discount = product.voucher ? (
      Number(product.price - (product.price * (Number(product.voucher.value) / 100))
      )
   )
      : ('');

   const cart = useSelector(state => state.productReducer.cart);

   const cartFunction = () => {

      const data = [
         {
            store_id: product.store.id,
            store_name: product.store.name,
            expedition_id: '',
            expedition_price: '',
            data: [
               {
                  product_id: product.id,
                  product_name: product.name,
                  stock: quantity,
                  // price: discount ? (discount * quantity) : (product.price * quantity),
                  price: discount ? (discount) : (product.price),
                  image: product.image,
               },
            ]
         }
      ];
      dispatch(addToCart(data));
   };

   return product.name ? (
      <SafeAreaView style={styles.containerMain}>
         <Header headerText="Detail Produk" canGoBack={true} navigation={navigation} />
         <Image source={{ uri: product.image }} style={{ height: 300, width: '100%' }} />
         <View style={styles.containerItem}>
            <Text style={styles.textName}>{`${product.name} - ${product.code}`}</Text>
            <Text style={styles.textName, { fontWeight: 'bold' }}>{`Rp ${product.price.toLocaleString('id-ID')} - ${discount.toLocaleString('id-ID')}`}</Text>
            <Text style={styles.textName}>{`${product.store.name} - ${product.store.province}`}</Text>
            <Text style={styles.textName}>{`${product.description}`}</Text>
         </View>
         <View style={styles.containerCounterPrice}>
            <Text style={styles.textSubTotal}>
               Sub Total Rp{discount !== '' ? (discount * quantity).toLocaleString('id-ID') : (product.price * quantity).toLocaleString('id-ID')}
            </Text>
            <View style={styles.containerCounter}>
               {quantity === 1 ? (
                  <View style={styles.buttonCounterDisabled}>
                     <Text style={styles.buttonCounterText}>-</Text>
                  </View>
               ) : (
                     <TouchableHighlight style={styles.buttonCounter} onPress={() => { setQuantity(quantity - 1) }}>
                        <Text style={styles.buttonCounterText}>-</Text>
                     </TouchableHighlight>
                  )}
               <Text style={styles.textCounter}>{quantity}</Text>
               <TouchableHighlight style={styles.buttonCounter}>
                  <Text style={styles.buttonCounterText} onPress={() => { setQuantity(quantity + 1) }}>+</Text>
               </TouchableHighlight>
            </View>
         </View>
         <View style={styles.containerCartButton}>
            <TouchableOpacity onPress={() => {
               // dispatch(addToCart({ ...product, quantity }))
               cartFunction(product.store.id)
               ToastAndroid.show('Berhasil Menambahkan item!', ToastAndroid.SHORT)
            }}>
               <View style={styles.buttonAddToCart}>
                  <Text style={styles.buttonAddToCartText}>Tambah ke Keranjang</Text>
               </View>
            </TouchableOpacity>
         </View>
      </SafeAreaView >
   ) : (<Text>Loading</Text>)
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
   containerCounterPrice: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
   },
   textSubTotal: {
      fontSize: 16,
   },
   containerCounter: {
      flexDirection: 'row',
      alignItems: 'center',
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
      backgroundColor: '#fff',
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
