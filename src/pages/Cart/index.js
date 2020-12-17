import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { SectionList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem, Header } from '../../components';
import { setExpedition } from '../../redux/actions/product'

const Cart = ({ navigation }) => {
   const [shipment, setShipment] = useState(null);

   const dispatch = useDispatch();

   const stateCart = useSelector(state => state.productReducer.cart);
   const stateExpedition = useSelector(state => state.productReducer.shipment);

   return (
      <>
         <Header headerText="Keranjang" cartShown={false} canGoBack={true} navigation={navigation} />
         <View style={styles.containerMain}>
            <SectionList
               sections={stateCart}
               keyExtractor={(item, index) => item + index}
               renderItem={({ item }) => <CartItem product={item} />}
               renderSectionHeader={({ section: { store_name } }) => (
                  <View style={styles.containerTextStore}>
                     <Text style={styles.textStore}>{store_name}</Text>
                  </View>
               )}
               renderSectionFooter={(itemProduct) => (
                  <View style={styles.containerShipmentInfo}>
                     <View style={styles.containerPickerShipment}>
                        <Picker mode="dropdown" style={styles.pickerShipment} selectedValue={itemProduct.section.expedition_id}
                           onValueChange={(itemValue, itemIndex) => dispatch(setExpedition({
                              store_id: itemProduct.section.store_id,
                              expedition_id: itemValue,
                              expedition_price: itemIndex - 1 === -1 ? ('') : (stateExpedition[itemIndex - 1].price),
                           }))}
                        >
                           <Picker.Item label="Pilih Ekspedisi" value="" />
                           {stateExpedition.map(item => (
                              <Picker.Item label={item.name} key={item.id} value={item.id} />
                           ))}
                        </Picker>
                     </View>
                     <View style={styles.containerShippingCost}>
                        <Text style={styles.textShippingCost}>Biaya Kirim {itemProduct.section.expedition_price ? (`Rp ${itemProduct.section.expedition_price.toLocaleString('id-ID')}`) : ('-')}</Text>
                        <Text style={styles.textShippingCostTotal}>Sub Total Rp 40.000</Text>
                     </View>
                  </View>
               )}
               ListFooterComponent={() => {
                  return stateCart.length ? (
                     <View style={styles.containerBottomItem}>
                        <Text style={styles.textTotal}>Total Rp 70.000</Text>
                        <TextInput placeholder="Masukan alamat pengiriman" style={styles.inputAddress} />
                        <TouchableOpacity>
                           <View style={styles.btnBuy}>
                              <Text style={styles.btnBuyText}>Beli</Text>
                           </View>
                        </TouchableOpacity>
                     </View>
                  ) : (null)
               }
               }
               ListEmptyComponent={() => (
                  <View style={styles.containerEmptyCart}>
                     <Text style={{ fontSize: 18 }}>Keranjang masih kosong</Text>
                  </View>
               )}
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
      fontSize: 16,
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
      marginHorizontal: 10,
   },
   textTotal: {
      fontSize: 16,
      fontWeight: 'bold',
      marginHorizontal: 15,
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
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
   },
   containerEmptyCart: {
      flex: 1,
      // backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
   },
})
