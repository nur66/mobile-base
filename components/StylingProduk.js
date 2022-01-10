import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native'

import product1 from '../assets/img/product1.jpg'
import product2 from '../assets/img/product2.jpg'

const Produk = (props) => {
    return (
        <View style={styles.wrapper}>
            <Image 
                source={props.image}
                style={{width: 150, height: 150}}
            />
            <Text style={{marginTop:10}}>{props.title}</Text>
            <Text>{props.price}</Text>
            <Text style={{marginBottom:10}}>{props.address}</Text>
            <Button title="tambah" />
        </View>
    )
}

const StylingProduk = () => {
    return (
        <ScrollView>
            <View>
                <Produk image={product1} title="New Macbox NRL23" price="12.750.000" address="Batam" />
                <Produk image={product2} title="New Macbox NRL23" price="12.750.000" address="Batam" />
            </View>
        </ScrollView>
    )
}

export default StylingProduk

const styles = StyleSheet.create({
    wrapper: {
        padding: 40,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#E7FBBE',
        borderWidth: 1,
        borderColor: '#E7FBBE',
        width: 200,
        marginBottom: 20,
    }
})
