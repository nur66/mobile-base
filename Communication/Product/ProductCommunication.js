import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity } from 'react-native'

import product1 from '../../assets/img/product1.jpg'
import product2 from '../../assets/img/product2.jpg'

// const Produk = (props) => {
//     return (
        
//     )
// }

const ProductCommunication = (props) => {
    return (
        <ScrollView>
            
            <View style={styles.wrapper}>
                <Image 
                    source={props.image}
                    style={{width: 188, height: 107, borderRadius: 8}}
                />
                <Text style={{marginTop:10, fontSize: 14, fontWeight: 'bold'}}>{props.title}</Text>
                <Text style={{fontSize: 12, fontWeight: 'bold'}}>{props.price}</Text>
                <Text style={{marginBottom:10, fontSize: 12, fontWeight: 'bold'}}>{props.address}</Text>
                <TouchableOpacity onPress={props.onButtonPress}>
                    <View style={styles.buttonWrapper}>
                        <Text style={styles.buttonText}>BELI</Text>
                    </View>
                </TouchableOpacity>
            </View>
                {/* <Produk onButtonPress={()=> alert('hallo button')} image={product1} title="New Macbox NRL23" price="12.750.000" address="Batam" />
                <Produk onButtonPress={()=> alert('hallo button')} image={product2} title="New Macbox NRL23" price="12.750.000" address="Batam" /> */}
            
        </ScrollView>
    )
}

export default ProductCommunication

const styles = StyleSheet.create({
    wrapper: {
        padding: 12,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#E7FBBE',
        borderWidth: 1,
        borderColor: '#F2F2F2',
        width: 212,
        marginBottom: 20,
        borderRadius: 8
    },
    buttonWrapper: {
        backgroundColor: '#6FCF97',
        paddingVertical: 6,
        borderRadius: 25,
        marginTop: 20,
        paddingHorizontal: 78
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center'
    }
})
