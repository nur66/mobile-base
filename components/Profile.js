import React, {useState, useEffect} from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import nur from '../assets/img/nur.jpg'

// Fungsional Component biasa dibilang Hooks
// kalau menggunakan fungsional component ketiga hooks (mounted, mountedDidUpdate, WillUnmount)
// dibungkus dalam 1 function yaitu useEffect dari react

const Profile = () => {
    const [subscribe, setSubscriber] = useState(200)

    // useEffect(()=>{
    //     console.log('did mount');
    // }, []),
    
    // useEffect(()=>{
    //     console.log('did update');
    //     // akan di panggil setiap kali subcribe melakukan perubahan, karena ini update
    //     setTimeout(()=>{
    //         setSubscriber(400)
    //     }, 2000)
    //     // array subscribe ini artinya setiap perubahan apa yang mau kita baca
    // }, [subscribe] untuk melihat updatenya

    // jika ingin melakukannya dalam 1 function saja
    useEffect(()=>{
        console.log('did mount');
        setTimeout(()=>{
            setSubscriber(500)
        },2000)
        return ()=> {
            console.log('did update');
        }
        // jadi setiap melakukan update kita menentukan const nya apa, contoh subscribe
        // jadi [subscribe]
    },[subscribe])

    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
                source={nur}
                style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
            />
            <View>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Nur Iswanto., S.Kom</Text>
                <Text>{subscribe} subscriber</Text>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})
