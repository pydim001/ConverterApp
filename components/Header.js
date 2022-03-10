import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headertxt}>Unit Converter</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginBottom: -110,
        paddingTop: 50,
        paddingBottom: 15,
        backgroundColor: 'lightblue',
        alignItems: 'center'
    },
    headertxt: {
        fontSize: 20
    }
});