import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import chart from '../../assets/img/chart.png'

const CartCommunication = (props) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.cartWrapper}>
                <Image source={chart}
                    style={styles.iconChart}
                />
                <Text style={styles.notif}>{props.quantity}</Text>
            </View>
            <Text style={styles.description}>Keranjang belanja anda</Text>
        </View>
    )
}

export default CartCommunication

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        alignItems: 'center'
    },  
    cartWrapper: {
        borderWidth: 1,
        borderColor: 'green',
        width: 93,
        height: 93,
        borderRadius: 93/2,
        justifyContent: 'center',
        alignItems: 'center',    // kalau align-item untuk column, kalau justify-content untuk row
        position: 'relative'    // untuk mengunci
    },
    iconChart: {
        width: 50,
        height: 50
    },
    notif: {
        fontSize: 12,
        color: 'white',
        backgroundColor: 'green',
        padding: 4,
        width: 25,
        height: 25,
        borderRadius: 50,
        position: 'absolute',
        top: 0,
        right: 0
    },  
    description: {textAlign:'center', 
        fontSize: 12, 
        fontWeight: 'bold', 
        marginTop: 14}
})
