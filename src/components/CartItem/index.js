import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import defaultImg from '../../assets/Dummy/default.png'
import { Picker } from '@react-native-picker/picker';

const CartItem = ({ product }) => {
   return (
      <View style={styles.containterStore}>
         {/* <Text style={styles.textStore}>Toko 1 - Alamat</Text> */}
         <View style={styles.containerItemList}>
            <View style={styles.containerProduct}>
               <Image source={defaultImg} style={styles.imageProduct} />
               <View style={styles.containerTextProduct}>
                  <Text>{product.name}</Text>
                  <Text style={{ fontWeight: 'bold' }}>{`Rp 10000`}</Text>
                  <Text>{`Discount ${product.discount}%`}</Text>
               </View>
            </View>
            {/* <View style={styles.containerPickerShipment}>
               <Picker mode="dropdown" style={styles.pickerShipment} >
                  <Picker.Item label="Jne" value="Jne" />
                  <Picker.Item label="Jnt" value="Jnt" />
               </Picker>
            </View>
            <View style={styles.containerShippingCost}>
               <Text style={styles.textShippingCost}>Biaya Kirim Rp 20.000</Text>
               <Text style={styles.textShippingCostTotal}>Sub Total Rp 40.000</Text>
            </View> */}
         </View>
      </View>
   )
}

export default CartItem

const styles = StyleSheet.create({
   containterStore: {
      // flex: 1,
   },
   textStore: {
      marginHorizontal: 15,
      fontSize: 16,
      marginTop: 10,
      marginBottom: 5,
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
   containerPickerShipment: {
      borderWidth: 0.5,
      borderRadius: 5,
      marginHorizontal: 15,
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
})
