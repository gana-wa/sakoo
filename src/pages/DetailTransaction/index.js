import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { CartItem, Header } from '../../components';

const DetailTransaction = ({ navigation }) => {

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
         <Header headerText="Detail Transaksi" cartShown={false} canGoBack={true} navigation={navigation} />
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
               ListHeaderComponent={() => (
                  <View style={styles.containerInvoiceText}>
                     <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textInvoice}>Invoice Number - </Text>
                        <Text style={styles.textInvoiceBold}>xxx aaa ccc</Text>
                     </View>
                     <Text style={styles.textInvoice}>26 Desember 2020</Text>
                  </View>
               )}
               renderSectionFooter={() => (
                  <View style={styles.containerShipmentInfo}>
                     <Text style={styles.textShippingAgent}>Ekpedisi yang dipilih</Text>
                     <View style={styles.containerShippingCost}>
                        <Text style={styles.textShippingCost}>Biaya Kirim Rp 20.000</Text>
                        <Text style={styles.textShippingCostTotal}>Sub Total Rp 40.000</Text>
                     </View>
                  </View>
               )}
               ListFooterComponent={() =>
                  <View style={styles.containerBottomItem}>
                     <Text style={styles.textTotal}>Total Rp 70.000</Text>
                  </View>
               }
            />
         </View>
      </>
   )
}

export default DetailTransaction

const styles = StyleSheet.create({
   containerMain: {
      flex: 1,
   },
   containerInvoiceText: {
      backgroundColor: '#fff',
      marginHorizontal: 10,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 10,
      // alignItems: 'flex-end',
   },
   textInvoice: {
      fontSize: 16,
   },
   textInvoiceBold: {
      fontSize: 16,
      fontWeight: 'bold',
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
   textShippingAgent: {
      fontSize: 16,
      marginVertical: 10,
      marginHorizontal: 20,
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
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      backgroundColor: '#e74c3c',
      marginHorizontal: 10,
   },
   textTotal: {
      fontSize: 16,
      fontWeight: 'bold',
      marginHorizontal: 15,
      textAlign: 'right',
      marginVertical: 20,
      color: '#fff',
   },
})