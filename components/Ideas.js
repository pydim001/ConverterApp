import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Ideas(props) {
    return (
        <View style={styles.ideaBtn}>
            <TouchableOpacity
                style={styles.press}
                onPress={() => { props.navigation.navigate('Reviews') }}>
                <Image
                    source={require('../assets/lightbulb.png')}
                    style={styles.image} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40
    },
    ideaBtn: {
        width: 45,
        marginLeft: 65,
        marginTop: -42
    },
    press: {

    }
})