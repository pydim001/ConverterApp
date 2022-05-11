import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

export default function ColorInput(props) {
    if (props.type == "Hexadecimal") {
        return (
            <View>
                <Text style={styles.hash}>#</Text>
                <TextInput style={props.style} />
            </View>
        );
    }
    else if (props.type == "RGB") {
        return (
            <View>
                <TextInput style={{ ...props.style, ...styles.rgbRed }} />
                <TextInput style={{ ...props.style, ...styles.rgbGreen }} />
                <TextInput style={{ ...props.style, ...styles.rgbBlue }} />
                <Text style={styles.r}>R</Text>
                <Text style={styles.g}>G</Text>
                <Text style={styles.b}>B</Text>
            </View>
        );
    }
    else if (props.type == "HSL") {
        return (
            <View>
                <TextInput style={{ ...props.style, ...styles.hslHue }} />
                <TextInput style={{ ...props.style, ...styles.hslSat }} />
                <TextInput style={{ ...props.style, ...styles.hslLight }} />
                <Text style={styles.h}>H</Text>
                <Text style={styles.s}>S</Text>
                <Text style={styles.l}>L</Text>
                <Text>%</Text>
                <Text>%</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    hash: {
        marginBottom: -75,
        marginTop: 75,
        fontSize: 20,
        marginLeft: 110
    },
    rgbRed: {
        marginRight: 200,
        marginTop: 70
    },
    rgbGreen: {
        marginTop: -28
    },
    rgbBlue: {
        marginTop: -28,
        marginLeft: 200
    },
    r: {
        fontSize: 20,
        marginLeft: 90
    },
    g: {
        fontSize: 20,
        marginTop: -24,
        marginLeft: 190
    },
    b: {
        fontSize: 20,
        marginTop: -24,
        marginLeft: 290
    },
    hslHue: {
        marginRight: 200,
        marginTop: 70
    },
    hslSat: {
        marginTop: -28
    },
    hslLight: {
        marginTop: -28,
        marginLeft: 200
    },
    h: {
        fontSize: 20,
        marginLeft: 90
    },
    s: {
        fontSize: 20,
        marginTop: -24,
        marginLeft: 190
    },
    l: {
        fontSize: 20,
        marginTop: -24,
        marginLeft: 290
    },
    satPer: {
        fontSize: 20
    },
    lightPer: {
        fontSize: 20
    }
})