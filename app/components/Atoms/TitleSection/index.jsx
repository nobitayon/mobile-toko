import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TitleSection = (props) => {
    const {title} = props
    return (
        <View style={styles.titleSection}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title}>More</Text>
        </View>
    )
}

export default TitleSection

const styles = StyleSheet.create({
    titleSection: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 10
    },
})