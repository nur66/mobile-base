import React, {Component} from 'react'
import { Image, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import mawar from '../assets/img/mawar.jpg'

export const SampleComponent = () => {
    return (
        <View>
            <Nur />
            <Photo />
            <BoxGreen />
            <Album />
            <Image source={mawar} style={{borderRadius: 70}} />
        </View>
    )
}

const Nur = () => {
    return <Text>Nur Iswanto is mobile developer</Text>
}

const Photo = () => {
    return (
        // Kalau buat 2 component bungkus pake View
        <View>
            <Image
            source={{uri:'http://1.bp.blogspot.com/_zdKkqImjW9U/SkQ2dpeYwYI/AAAAAAAAAF0/E7JlMQdjSBU/w1200-h630-p-k-no-nu/peterpan-big.jpg'}}
            style={{width: 100, height: 100}}
            />
        </View> 
    )
}

// Membuat Component dari Class
class BoxGreen extends Component {
    render() {
        return <Text>Ini Component dari Class</Text>
    }
}

class Album extends Component {
    render() {
        return(
            <View>
                <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/id/thumb/a/ac/AlexandriaNew.jpg/220px-AlexandriaNew.jpg'}}
                style={{width: 300, height: 300, borderRadius: 50}}
                />
                <Text>Album Alexandria</Text>
            </View>
        ) 
    }
}

// export default SampleComponent
// kalau tidak mau di export default maka export langsung const SampleComponent
// Dan cara manggilnya di App.js menggunakan {}

const styles = StyleSheet.create({})
