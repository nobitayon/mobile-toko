import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card, TitleSection } from '../../components/Atoms'

const Home = () => {

    const [data, setData] = useState([])

    const getProducts = useCallback(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setData(json.slice(0, 3))
            })
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
                <TitleSection title="All Products" />
                <View style={styles.wrap}>
                    {data.map((item, idx) => (
                        <Card key={idx} product={item} />
                    ))}
                </View>
            </View>

            <View>
                <TitleSection title="Products Favourite" />
                <View style={styles.wrap}>
                    {data.map((item, idx) => (
                        <Card key={idx} product={item} />
                    ))}
                </View>
            </View>

            <View>
                <TitleSection title="Products Favourite" />
                <View style={styles.wrap}>
                    {data.map((item, idx) => (
                        <Card key={idx} product={item} />
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

