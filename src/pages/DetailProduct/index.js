import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import defaultImg from '../../assets/Dummy/default.png'
import { Header } from '../../components'

const DetailProduct = ({ navigation }) => {
   return (
      <SafeAreaView style={styles.containerMain}>
         <Header headerText="Detail Produk" canGoBack={true} navigation={navigation} />
         <Image source={defaultImg} style={{ height: 300, width: '100%' }} />
         <View style={styles.containerItem}>
            <Text style={styles.textName}>Nama Barang - Kode Barang</Text>
            <Text style={styles.textName, { fontWeight: 'bold' }}>Rp 10.000 - (Harga diskon jika ada)</Text>
            <Text style={styles.textName}>Nama Toko - Alamat toko</Text>
            <Text style={styles.textName}>Deskripsi Barang</Text>
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
