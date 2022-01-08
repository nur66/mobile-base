import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { Component, useEffect, useState } from 'react';

// import Login from './screens/Login';
import {SampleComponent} from './components/SampleComponent';
import { Product } from './components/Product';
import FlexBox from './components/FlexBox';
import Profile from './components/Profile';
import Position from './components/Position';


export default function App() {
  // dibuat dengan class component
  // const [isShow, setIsShow] = useState(true)
  // const [icon, setIcon] = useState(true)
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setIsShow(false)
  //   }, 6000),
  //   setTimeout(()=>{
  //     setIcon(false)
  //   }, 1000)
  // })
  return (
    // <Login />
    <View style={styles.container}>
      {/* <SampleComponent /> */}
      {/* <Button title='My First Button' /> */}
      {/* <Product /> */}

      {/* dibuat dengan class component */}
      {/* {isShow && <FlexBox />} */}

      {/* Menggunakan functional component */}
      <Profile />

      {/* dibuat dengan class component */}
      {/* {icon && <Position />} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
