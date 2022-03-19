import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Switch(props) {
    return (
        <View>
            <TouchableOpacity style={styles.switchBtn}>
                <Text>↑↓</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    switchBtn: {
        marginTop: 30,
        width: 25,
        marginLeft: 325,
        marginBottom: -50,
        borderWidth: 1,
        backgroundColor: 'lightblue',
    }
})