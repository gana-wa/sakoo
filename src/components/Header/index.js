import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Badge } from 'react-native-elements';
import Feather from 'react-native-vector-icons/dist/Feather';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import { useSelector } from 'react-redux';

const Header = ({ headerText = "Header", canGoBack, navigation, cartShown = true }) => {
   const IconCart = <Feather name="shopping-cart" size={30} color="#95a5a6" />
   const IconBack = <MaterialIcons name="arrow-back-ios" size={25} color="#7f8c8d" />
   const stateCart = useSelector(state => state.productReducer.cart)
   return (
      <View style={styles.containerMain}>
         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {canGoBack ? (
               <Pressable onPress={() => navigation.goBack()}>
                  <View style={styles.containerIconBack}>
                     {IconBack}
                  </View>
               </Pressable>
            ) : null}
            <Text style={styles.textHeader}>{headerText}</Text>
         </View>
         {cartShown ? (
            <View>
               <Pressable onPress={() => navigation.navigate("Cart")}>
                  {IconCart}
               </Pressable>
               {stateCart.length ? (<Badge
                  status="error"
                  // value="10"
                  containerStyle={{ position: 'absolute', top: -4, right: -4 }}
               />) : (null)}
            </View>
         ) : (null)}
      </View>
   )
}

export default Header

const styles = StyleSheet.create({
   containerMain: {
      backgroundColor: '#fff',
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      elevation: 3,
   },
   textHeader: {
      fontSize: 20,
      fontWeight: '700',
      elevation: 10
   },
   containerIconBack: { marginRight: 15 },
})
