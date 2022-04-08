import React from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import Widget from "../components/Widget";
import ColorSwitch from "../components/ColorSwitch";
import SettingSwitch from "../components/SettingSwitch"

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
            <Widget name="Color" component={ColorSwitch} />
            <Widget name="Dark Mode" component={SettingSwitch} />
            <Widget name="Step Size" component={TextInput} />
            <Widget name="Conversion Mode" component={SettingSwitch} />
            <Widget name="Ordering" component={SettingSwitch} />
            <Widget name="Formula" component={SettingSwitch} />
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