import { StyleSheet, Text, View, TextInput } from "react-native";
import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react';

export default function Units(props) {
    const allUnits = require("../assets/conversion.json");
    const [selectedUnit, setSelectedUnit] = useState("Square Miles");

    return (
        <View>
            <Picker
                selectedValue={selectedUnit}
                style={styles.firstUnit}
                onValueChange={itemValue => (setSelectedUnit(itemValue))}>
                {allUnits[props.unit].map(unit => (<Picker.Item label={unit} value={unit} />))}
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    firstUnit: {
        height: 50,
        width: 275
    }
})