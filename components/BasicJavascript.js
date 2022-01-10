import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BasicJavascript = () => {
    // Tipe Data

    // Tipe Data Primitive
    const nama = 'Nur'
    const age = 27
    const apakahLakiLaki = true

    // Tipe Data Complex
    const hewanPeliharaan = {
        nama: 'Miaw',
        jenis: 'Kucing',
        usia: 2,
        apakahHewanLokal: true,
        warna: 'kuning',
        orangTua: {
            jantan: 'Kaisar',
            betina: 'Kuin'
        } // object
    }

    const sapaOrang = (name, age) => {
        return console.log(`Hallo ${name}, usia anda ${age}`);
    } // function
    sapaOrang('Nur', 27)

    const namaOrang = ['Nur', 'Lisa', 'Uwais', 'Harits', 'Zaid']
    typeof namaOrang    // object / array



    // Kondisi
    if(hewanPeliharaan.nama === 'Miaw'){
        console.log('Hallo Miaw');
    } else {
        console.log('Hewan siapa ini?');
    }
    // cara memanggilnya dengan masukan dia kedalam function dan buat returnnya

    const sapaHewan = (objectHewan) => {
        let hasilSapa = ''
        if(objectHewan.nama === 'Miaw'){
            hasilSapa = 'Halo Miaw, apa kabar'
        } else {
            hasilSapa = 'ini hewan siapa ya?'
        }
        return hasilSapa
    }

    // ternary operation
    const sapaBinatang = (objectHewan) => {
        return objectHewan.nama === 'Miaw' ? 'Halo Miaw apa kabar' : 'ini binatang siapa?'
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Materi Basic Javascript</Text>

            {/* kemudian panggil nama functionnya, hewan peliharaan adalah suatu objek yang ada diatas */}
            <Text>{sapaHewan(hewanPeliharaan)}</Text>

            {/* Kemudian panggil nama binatangnya */}
            <Text>{sapaBinatang(hewanPeliharaan)}</Text>

            {/* Looping */}
            {/* Manual */}
            <Text>Ini secara manual</Text>
            <Text>{namaOrang[0]}</Text>
            <Text>{namaOrang[1]}</Text>
            <Text>{namaOrang[2]}</Text>
            {/* orang maksudnya permasing2 index nya kita mau buat namanya apa */}

            <Text>Ini menggunakan looping react</Text>
            {/* Menggunakan looping react */}
            {namaOrang.map((orang)=>(
                <Text>{orang}</Text>
            ))}
        </View>
    )
}

export default BasicJavascript

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    textTitle: {
        textAlign: 'center'
    }
})
