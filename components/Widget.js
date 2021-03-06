import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Widget(props) {

    return (
        <View>
            <View style={styles.hr} />
            <View style={styles.textView}>
                <Text style={styles.txt}>{props.name}</Text>
                {props.component}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    hr: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        width: 370,
        marginTop: 20,
        marginBottom: 0,
        alignSelf: 'center'
    },
    textView: {
        marginTop: 20,
        marginLeft: 50
    },
    txt: {
        fontSize: 20
    }
})