import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function SettingScreen({ navigation }) {
    return (
        <View>
            <View style={styles.back}>
                <Button
                    title="Back"
                    onPress={() => { navigation.navigate('Home') }} />
            </View>
            <View style={styles.header}>
                <Text>
                    Settings
                </Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center'
    },
    back: {
        paddingTop: 50,
        alignItems: 'flex-start'
    }
})