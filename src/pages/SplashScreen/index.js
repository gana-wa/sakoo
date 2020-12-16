import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Logo from '../../assets/Icon/Logo.png'

const SplashScreen = ({ navigation }) => {
   useEffect(() => {
      setTimeout(() => {
         return navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
         });
      }, 1000);
   }, [])
   return (
      <View style={{ backgroundColor: '#ecf0f1', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Image source={Logo} style={{ height: 80, width: 150 }} />
      </View>
   )
}

export default SplashScreen

const styles = StyleSheet.create({})
