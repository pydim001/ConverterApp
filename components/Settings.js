import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function Settings() {
    return (
        <View style={styles.settingBtn}>
            <TouchableOpacity style={styles.press}>
                <Image
                    source={require('../assets/settings.png')}
                    style={styles.image} />
            </TouchableOpacity>
        </View>
    )
}

export class SettingsScreen extends React.Component {
    render() {
        return (
            <View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40
    },
    settingBtn: {
        marginTop: -40,
        marginLeft: 10,
        width: 45
    },
    press: {

    }
})