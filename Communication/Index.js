import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import CartCommunication from './Cart/CartCommunication'
import ProductCommunication from './Product/ProductCommunication'
import product1 from '../assets/img/product1.jpg'
import product2 from '../assets/img/product2.jpg'

// nilai statis nya di CartCommunication di jadikan props agar menjadi dinamis
// props.quantity
// <CartCommunication quantity={20} /> seperti ini jalan tetapi kita mau trigger ketika di klik maka nilainya berubah
// jadi kita harus membuat state karena functional component
// untuk mengganti quantity ini
// setTotalProduct adalah fungsi untuk merubah nilai totalProdact
// TouchableOpacity (sebenernya ada banyak jenisnya)
// bagaimana caranya agar dia bisa memunculkan fungsi untuk dikirim ke cart, nah caranya dengan memberikan props
// dari pada kita taro function nya di onPress lebih baik kita taro di luar
// katakan kita buat fungsi onPressButton (buatan kita sendiri)
// jadi kita tidak buat function di onPress, tetapi di function yang memanggilnya
// karena yang pakai adalah component <ProductCommunication /> maka kita akan buat function disana
// jadi ProductCommunication ini bisa mentrigger function

const Index = () => {
    const [totalProduct, setTotalProduct] = useState(0)
    return (
        <ScrollView>
        <View style={styles.container}>
                <Text style={styles.title}>Komunikasi antar component</Text>
                <CartCommunication quantity={totalProduct} />
                <ProductCommunication onButtonPress={()=> setTotalProduct(totalProduct + 1)} image={product1} title="New Macbox NRL23" price="12.750.000" address="Batam" />
                <ProductCommunication onButtonPress={()=> setTotalProduct(totalProduct + 1)} image={product2} title="New Macbox NRL23" price="10.250.000" address="Batam, Kepulauan Riau" />
        </View>
        </ScrollView>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    title: {
        textAlign: 'center'
    }
})
