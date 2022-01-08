import React, {Component} from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

// Urutan eksekusi
// 1. constructor
// 2. render
// 3. ComponentDidMount
// 4. ComponentDidUpdate
// 5. ComponentWillUnmount

class Flexbox extends Component {
    constructor(props){
        super(props)
        console.log('==>constuctor');
        this.state = {
            subscriber: 100
        }
    }

    componentDidMount() {
        console.log('==> Component Did Mount');
        setTimeout(()=>{
            this.setState({
                subscriber: 400
            })
        }, 2000)
    }

    componentDidUpdate(){
        console.log('==> Component did update');
    }

    componentWillUnmount(){
        console.log('==> Component will unmount');
    }

    render(){
        console.log('==> render');
        return (
            <View style={styles.Wrapper}>
                <View style={styles.flexbox1}></View>
                <View style={styles.flexbox2}></View>
                <View style={styles.flexbox3}></View>
                <View style={styles.flexbox4}></View>
                <Text>{this.state.subscriber} Subscriber</Text>
            </View>
        )
    }
}

export default Flexbox

const styles = StyleSheet.create({
    Wrapper: {
        backgroundColor: 'grey',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flexbox1: {
        backgroundColor: 'red',
        flex: 1,
        height: 100
    },
    flexbox2: {
        backgroundColor: 'yellow',
        flex: 2,
        height: 150
    },
    flexbox3: {
        backgroundColor: 'green',
        flex: 3,
        height: 200
    },
    flexbox4: {
        backgroundColor: 'blue',
        flex: 4,
        height: 250
    }
})

// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'

// const FlexBox = () => {
//     console.log('hello debugger');
//     return (
//         <View style={{flexDirection: 'row', 
//             backgroundColor: 'grey', 
//             alignItems: 'center',
//             justifyContent: 'space-between'
//             }}>
//             <View style={{backgroundColor: 'red', width: 50, height:50}} />
//             <View style={{backgroundColor: 'yellow', width: 50, height:100}} />
//             <View style={{backgroundColor: 'green', width: 50, height:150}} />
//             <View style={{backgroundColor: 'blue', width: 50, height:200}} />
//         </View>
//     )
// }

// export default FlexBox

// const styles = StyleSheet.create({})
