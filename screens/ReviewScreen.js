import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function ReviewScreen({ navigation }) {
    return (
        <View>
            <View style={styles.back}>
                <Button
                    title="Back"
                    onPress={() => { navigation.navigate('Home') }} />
            </View>
            <View style={styles.header}>
                <Text>
                    Reviews & Ideas
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