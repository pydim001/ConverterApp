import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ColorInput(props) {

    const [color, setColor] = useState();

    const save = () => {

    }

    if (props.type == "Hexadecimal") {

        const [hex, setHex] = useState();

        return (
            <View>
                <Text style={styles.hash}>#</Text>
                <TextInput
                    style={props.style}
                    maxLength={6}
                    onChangeText={val => { setHex(val) }} />
                <TouchableOpacity
                    onPress={() => {
                        setColor(hex);
                    }}
                    style={styles.save}>
                    <Text>Save</Text>
                </TouchableOpacity>
            </View>
        );
    }
    else if (props.type == "RGB") {

        const [r, setR] = useState();
        const [g, setG] = useState();
        const [b, setB] = useState();

        return (
            <View>
                <TextInput
                    style={{ ...props.style, ...styles.rgbRed }}
                    maxLength={3}
                    keyboardType='numeric'
                    returnKeyType='done' />
                <TextInput
                    style={{ ...props.style, ...styles.rgbGreen }}
                    maxLength={3}
                    keyboardType='numeric'
                    returnKeyType='done' />
                <TextInput
                    style={{ ...props.style, ...styles.rgbBlue }}
                    maxLength={3}
                    keyboardType='numeric'
                    returnKeyType='done' />
                <Text style={styles.r}>R</Text>
                <Text style={styles.g}>G</Text>
                <Text style={styles.b}>B</Text>
                <TouchableOpacity
                    onPress={save}
                    style={styles.save}>
                    <Text>Save</Text>
                </TouchableOpacity>
            </View>
        );
    }
    else if (props.type == "HSL") {
        return (
            <View>
                <TextInput
                    style={{ ...props.style, ...styles.hslHue }}
                    maxLength={3}
                    keyboardType='numeric'
                    returnKeyType='done' />
                <TextInput
                    style={{ ...props.style, ...styles.hslSat }}
                    maxLength={3}
                    keyboardType='numeric'
                    returnKeyType='done' />
                <TextInput
                    style={{ ...props.style, ...styles.hslLight }}
                    maxLength={3}
                    keyboardType='numeric'
                    returnKeyType='done' />
                <Text style={styles.h}>H</Text>
                <Text style={styles.s}>S</Text>
                <Text style={styles.l}>L</Text>
                <Text style={styles.satPer}>%</Text>
                <Text style={styles.lightPer}>%</Text>
                <TouchableOpacity
                    onPress={save}
                    style={styles.save}>
                    <Text>Save</Text>
                </TouchableOpacity>
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
        marginTop: -28,
        width: 100
    },
    hslLight: {
        marginTop: -28,
        marginLeft: 220,
        width: 100
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
        marginLeft: 300
    },
    satPer: {
        marginTop: -50,
        fontSize: 20,
        marginLeft: 230,
        width: 50
    },
    lightPer: {
        marginTop: -22,
        fontSize: 20,
        marginLeft: 335,
        width: 50
    },
    save: {
        marginTop: 30,
        alignSelf: 'flex-end',
        marginRight: 20,
        backgroundColor: 'lightblue',
        padding: 10,
        borderWidth: 1
    }
})