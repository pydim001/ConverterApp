import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ReviewScreen() {
    return (
        <View style={styles.header}>
            <Text>
                Reviews
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 90,
        alignItems: 'center'
    }
})