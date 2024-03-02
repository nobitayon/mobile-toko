import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card, TitleSection } from '../../components/Atoms'

const Home = () => {
    const getProducts = useCallback(() => {
        fetch('https://fakestoreapi.com/products/1')
        .then(res => res.json())
        .then(json => console.log(json))
    }, [])

    useEffect(() => {
        getProducts()
    }, [])
    return (
        <ScrollView style={styles.container}>

            <View style={styles.title}>
                <Text>Homepage</Text>
            </View>

            <View style={styles.banner}>

            </View>

            <View>
                <TitleSection title="All Products"/>
                <View style={styles.wrap}>
                    {[1, 1, 1].map((item, idx) => (
                        <Card key={idx}/>
                    ))}
                </View>
            </View>

            <View>
                <TitleSection title="Products Favourite"/>
                <View style={styles.wrap}>
                    {[1, 1, 1].map((item, idx) => (
                        <Card key={idx}/>
                    ))}
                </View>
            </View>

            <View>
                <TitleSection title="Products Favourite"/>
                <View style={styles.wrap}>
                    {[1, 1, 1].map((item, idx) => (
                        <Card key={idx}/>
                    ))}
                </View>
            </View>

        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: '5%'
    },
    banner: {
        width: '100%',
        height: 200,
        borderRadius: 15,
        marginBottom: 20,
        backgroundColor: "#f0f0f0"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 10
    },
    wrap: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

