import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, SectionList } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { CartItem, Header } from '../../components'
import defaultImg from '../../assets/Dummy/default.png'

const Cart = ({ navigation }) => {
   const [shipment, setShipment] = useState(null);

   const DATA = [
      {
         store: "Toko 1 - Alamat",
         data: [
            {
               name: "Produk 1A",
               price: 10000,
               discount: 10,
            },
            {
               name: "Produk 2A",
               price: 20000,
               discount: 10,
            },
         ],
      },
      {
         store: "Toko 2 - Alamat",
         data: [
            {
               name: "Produk 1B",
               price: 10000,
               discount: 10,
            },
         ],
      },
      {
         store: "Toko 3 - Alamat",
         data: [
            {
               name: "Produk 1C",
               price: 10000,
               discount: 10,
            },
            {
               name: "Produk 2C",
               price: 20000,
               discount: 10,
            },
         ],
      },
      {
         store: "Toko 4 - Alamat",
         data: [
            {
               name: "Produk 1D",
               price: 10000,
               discount: 10,
            },
            {
               name: "Produk 2D",
               price: 20000,
               discount: 10,
            },
         ],
      }
   ];

   return (
      <>
         <Header headerText="Keranjang" cartShown={false} canGoBack={true} navigation={navigation} />
         <View style={styles.containerMain}>
            <SectionList
               sections={DATA}
               keyExtractor={(item, index) => item + index}
               renderItem={({ item }) => <CartItem product={item} />}
               renderSectionHeader={({ section: { store } }) => (
                  <View style={styles.containerTextStore}>
                     <Text style={styles.textStore}>{store}</Text>
                  </View>
               )}
               renderSectionFooter={() => (
                  <View style={styles.containerShipmentInfo}>
                     <View style={styles.containerPickerShipment}>
                        <Picker mode="dropdown" style={styles.pickerShipment} selectedValue={shipment}
                           onValueChange={(itemValue, itemIndex) => setShipment(itemValue)}
                        >
                           <Picker.Item label="Pilih Ekpedisi" value={null} />
                           <Picker.Item label="Jne" value="Jne" />
                           <Picker.Item label="Jnt" value="Jnt" />
                        </Picker>
                     </View>
                     <View style={styles.containerShippingCost}>
                        <Text style={styles.textShippingCost}>Biaya Kirim Rp 20.000</Text>
                        <Text style={styles.textShippingCostTotal}>Sub Total Rp 40.000</Text>
                     </View>
                  </View>
               )}
               ListFooterComponent={() =>
                  <View style={styles.containerBottomItem}>
                     <Text style={styles.textTotal}>Total Rp 70.000</Text>
                     <TextInput placeholder="Masukan alamat pengiriman" style={styles.inputAddress} />
                     <TouchableOpacity>
                        <View style={styles.btnBuy}>
                           <Text style={styles.btnBuyText}>Beli</Text>
                        </View>
                     </TouchableOpacity>
                  </View>
               }
            />
         </View >
      </>
   )
}

export default Cart

const styles = StyleSheet.create({
   containerMain: {
      flex: 1,
   },
   containterStore: {
      backgroundColor: 'blue',
      // flex: 1,
   },
   containerTextStore: {
      backgroundColor: '#fff',
      marginHorizontal: 10,
      paddingHorizontal: 10,
      paddingTop: 10,
      marginTop: 10,
      paddingBottom: 5,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
   },
   textStore: {
      // backgroundColor: '#fff',
      // marginHorizontal: 15,
      fontSize: 16,
      // marginBottom: 5,
   },
   containerItemList: {
      marginHorizontal: 10,
      backgroundColor: '#fff',
      borderRadius: 10,
   },
   containerProduct: {
      // backgroundColor: '#fff',
      // elevation: 3,
      borderRadius: 10,
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
   containerShipmentInfo: {
      backgroundColor: '#fff',
      marginHorizontal: 10,
      paddingBottom: 5,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      marginBottom: 5,
   },
   containerPickerShipment: {
      borderWidth: 0.5,
      borderRadius: 5,
      marginHorizontal: 20,
   },
   pickerShipment: {
      // backgroundColor: 'yellow',
      // marginHorizontal: 15,
   },
   containerShippingCost: {
      marginVertical: 10,
      marginHorizontal: 15,
   },
   textShippingCost: {
      textAlign: 'right',
      fontSize: 16,
      marginBottom: 5,
   },
   textShippingCostTotal: {
      textAlign: 'right',
      fontSize: 16,
      fontWeight: 'bold',
   },
   containerBottomItem: {
      // flex: 1,
      // alignSelf: 'flex-end',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      backgroundColor: '#fff',
   },
   textTotal: {
      fontSize: 16,
      fontWeight: 'bold',
      marginHorizontal: 25,
      textAlign: 'right',
      marginVertical: 20,
   },
   inputAddress: {
      borderWidth: 0.5,
      borderRadius: 5,
      marginHorizontal: 15,
      marginBottom: 15,
   },
   btnBuy: {
      borderRadius: 10,
      marginHorizontal: 10,
      backgroundColor: '#e74c3c',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
      marginBottom: 10,
   },
   btnBuyText: {
      fontSize: 20,
      // fontWeight: 'bold',
      color: '#fff',
   },
})
