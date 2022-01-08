import React, {useState, Component} from 'react'
import {View, Text, Image, StyleSheet, Button} from 'react-native'

// Dengan Functional Component
const Counter = () => {
    const [number, setNumber] = useState(0)
    return (
        <View>
            <Text>{number}</Text>
            <Button title='Tambah' onPress={()=> setNumber(number + 1)} />
        </View>
    )
}

// Dengan Class Component
class CounterClass extends Component {
    // cara membuat [number, setNumber] di Class Component
    state = {
        number: 0,
    }
    render(){
        return(
            <View>
                <Text>{this.state.number}</Text>
                <Button title='tambah' onPress={()=> this.setState({number : this.state.number + 1})} />
            </View>
        )
    }
}


const stateDinamis = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textTitle}>Halaman stateDinamis</Text>
            <Counter />
            <CounterClass />
        </View>
    )
}

export default stateDinamis

const styles = StyleSheet.create({
    wrapper: {
        padding: 20
    },
    textTitle: {
        textAlign: 'center'
    }
})