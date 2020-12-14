import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ProductItem from '../../components/ProductItem'

const ListProduct = () => {
   return (
      <SafeAreaView>
         <ScrollView>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
         </ScrollView>
      </SafeAreaView>
   )
}

export default ListProduct

const styles = StyleSheet.create({})
