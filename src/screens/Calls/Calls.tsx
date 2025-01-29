import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../theme/colors'

const Calls = () => {
  return (
   <SafeAreaView style={styles.container}>
        <Text style={{color:colors.white}}>Under Development</Text>
      </SafeAreaView>
  )
}

export default Calls

const styles = StyleSheet.create({
   container:{
      backgroundColor:colors.light_black,
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
})