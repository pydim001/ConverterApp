import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Widget from "../components/Widget";

export default function SettingScreen({ navigation }) {
    return (
        <View>
            <View style={styles.back}>
                <Button
                    title="Back"
                    onPress={() => { navigation.navigate('Home') }} />
            </View>
            <View style={styles.header}>
                <Text style={styles.txt}>
                    Settings
                </Text>
            </View>
            <Widget name="Color" />
            <Widget name="Dark Mode" />
            <Widget name="Step Size" />
            <Widget name="Conversion Mode" />
            <Widget name="Ordering" />
            <Widget name="Formula" />
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center'
    },
    back: {
        paddingTop: 50,
        paddingLeft: 20,
        alignItems: 'flex-start'
    },
    txt: {
        fontSize: 20
    }
})