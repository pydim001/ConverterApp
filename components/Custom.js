import React from 'react';
import { StyleSheet, View, Image } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Custom(props) {
    return (
        <View style={styles.plusBtn}>
            <TouchableOpacity
                style={styles.press}
                onPress={() => { props.navigation.navigate('Custom') }}>
                <Image
                    source={require("../assets/plus.png")}
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
    plusBtn: {
        marginLeft: 285,
        marginTop: -36,
        width: 45
    },
    press: {

    }
})