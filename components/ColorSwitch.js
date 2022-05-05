import React from "react";
import { View, TouchableOpacity, StyleSheet } from 'react-native';

export default function ColorSwitch(props) {

    const palette = () => {

    }

    return (
        <View>
            <TouchableOpacity
                onPress={palette}
                style={styles.palette}>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    palette: {
        marginTop: -30,
        marginLeft: 260,
        width: 30,
        height: 30,
        backgroundColor: 'lightblue',
        borderWidth: 2
    }
})