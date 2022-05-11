import React from "react";
import { View, StyleSheet, Button } from "react-native";

export default function Palette({ navigation }) {
    return (
        <View>
            <View style={styles.back}>
                <Button
                    title="Back"
                    onPress={() => { navigation.navigate('Settings') }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    back: {
        paddingTop: 50,
        paddingLeft: 20,
        alignItems: 'flex-start'
    }
})