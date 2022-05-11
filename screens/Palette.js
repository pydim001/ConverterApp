import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";
import ColorInput from "../components/ColorInput";
import Conversion from "../components/Coversion";

export default function Palette({ navigation }) {

    const colorTypes = ["Hexadecimal", "RGB", "HSL"];
    const [colVal, setColVal] = useState(colorTypes[0]);
    const [color, setColor] = useState();
    const colStyles = { "Hexadecimal": styles.hex, "RGB": styles.rgb, "HSL": styles.hsl };

    return (
        <View>
            <View style={styles.back}>
                <Button
                    title="Back"
                    onPress={() => { navigation.navigate('Settings') }} />
            </View>
            <Conversion
                setChangedValue={(item) => setColVal(item)}
                items={colorTypes} />
            <ColorInput type={colVal} style={colStyles[colVal]} />
        </View>
    )
}

const styles = StyleSheet.create({
    back: {
        paddingTop: 50,
        paddingLeft: 20,
        alignItems: 'flex-start'
    },
    hex: {
        alignSelf: 'center',
        textAlign: 'center',
        borderBottomWidth: 1,
        marginTop: 50,
        width: 200,
        padding: 5
    },
    rgb: {
        alignSelf: 'center',
        textAlign: 'center',
        borderBottomWidth: 1,
        marginTop: 50,
        width: 70,
        padding: 5
    },
    hsl: {
        alignSelf: 'center',
        textAlign: 'center',
        borderBottomWidth: 1,
        marginTop: 50,
        width: 70,
        padding: 5
    }
})