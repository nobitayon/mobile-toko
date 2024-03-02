import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = ({product}) => {
    return (
        <View style={styles.card}>
            <Image  source={{uri:product.image}}
                resizeMode='center'
                style={styles.image}
            />
            <View style={styles.box}>
                <Text>Product</Text>
                <Text style={{fontWeight:'bold'}}>$200</Text>
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    card: {
        width: '30%',
        height: 150,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        padding:2
    },
    image:{
        width:'100%',
        height:'70%'
    },
    box:{
        padding:5,
    }
})