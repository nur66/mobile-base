import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

import product1 from '../assets/img/product1.jpg'
import product2 from '../assets/img/product2.jpg'
import product3 from '../assets/img/product3.jpg'
import product4 from '../assets/img/product4.jpg'

export const Product = () => {
    return (
        <View style={{padding: 12, backgroundColor: '#F2F2F2', width: 212, borderRadius: 8 }}>
            <Image source={product1} style={{width: 188, height: 107, borderRadius: 8}} />
            <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16, textAlign: 'center'}}>New Laptop Asus</Text>
            <Text style={{fontSize: 12, color: 'orange', textAlign: 'center', marginTop: 14}}>Rp. 7.200.000</Text>
            <Text style={{fontSize: 12, color: 'black', textAlign: 'center', marginTop:14}}>Batam</Text>
            <View style={{backgroundColor: '#6FCF97', borderRadius: 25, paddingVertical: 6, marginTop: 20}}>
                <Text style={{fontSize: 14, fontWeight: 600, color: 'white', textAlign: 'center'}}>Beli</Text>
            </View>
        </View>
    )
}