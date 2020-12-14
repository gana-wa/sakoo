import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Badge } from 'react-native-elements';
import Feather from 'react-native-vector-icons/dist/Feather';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'

const Header = ({ headerText = "Header", canGoBack }) => {
   // const [canGoBack, setCanGoBack] = useState(true);
   const IconCart = <Feather name="shopping-cart" size={30} color="#95a5a6" />
   const IconBack = <MaterialIcons name="arrow-back-ios" size={25} color="#7f8c8d" />
   return (
      <View style={styles.containerMain}>
         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {canGoBack ? (
               <View style={styles.containerIconBack}>
                  {IconBack}
               </View>
            ) : null}
            <Text style={styles.textHeader}>{headerText}</Text>
         </View>
         <View>
            {IconCart}
            <Badge
               status="error"
               value="10"
               containerStyle={{ position: 'absolute', top: -4, right: -4 }}
            />
         </View>
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
      alignItems: 'center'
   },
   textHeader: {
      fontSize: 20,
      fontWeight: '700',
      elevation: 10
   },
   containerIconBack: { marginRight: 15 },
})
