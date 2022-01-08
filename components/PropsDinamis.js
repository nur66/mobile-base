import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

// Component dinamis
// tambahkan params props untuk mengisi component kita agar dinamis
// buat props dengan nama name
const Story = (props) => {
    return (
        <View style={{marginRight: 10}}>
            <Image source={{uri: props.gambar,}}
                style={{width: 100, height: 100}}
            />
            <Text style={{textAlign: 'center'}}>{props.name}</Text>
        </View>
    )
}

const PropsDinamis = () => {
    return (
        <View>
            <Text>Materi Component Dinamis dengan props Nur</Text>
            <ScrollView horizontal>
                {/* name ini adalah props */}
                <View style={{flexDirection: 'row'}}>
                    <Story name="Monkey.D.Luffy" gambar="https://www.greenscene.co.id/wp-content/uploads/2021/10/Luffy-10.jpg" />
                    <Story name="Roronoa Zoro" gambar="https://blue.kumparan.com/image/upload/c_lpad,b_white,f_jpg,h_676,q_auto,w_1200/g_south,l_og_user_zprw89/co_rgb:ffffff,g_south_west,l_text:Heebo_20_bold:Konten%20dari%20Pengguna%0DAnime,x_140,y_26/one-piece-roronoa-zoro-grin-678b5a11aa2ca2db330e3b05467e3a7f_600x400_n52fww.jpg" />
                    <Story name="Vinsmoke Sanji" gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF3dqXNWXnzDlVRoUJhS17ClcVpJprZ54V7A&usqp=CAU" />
                    <Story name="Nami" gambar="https://i.pinimg.com/736x/53/0b/b5/530bb56bc59d4329a56a520284df88bd.jpg" />
                    <Story name="God Ussop" gambar="https://assets.pikiran-rakyat.com/crop/0x0:700x350/x/photo/2021/08/06/3807858016.png" />
                    <Story name="Nico Robin" gambar="https://en.memesrandom.com/wp-content/uploads/2021/03/Nico-Robin-TimeSkip-Novo-Mundo.jpg" />
                </View>
            </ScrollView>
        </View>
    )
}

export default PropsDinamis

const styles = StyleSheet.create({})
