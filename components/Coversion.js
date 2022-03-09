import { StyleSheet, Text, View } from "react-native";
import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react';

export default function Conversion(prop) {
  const [selectedField, setSelectedField] = useState("Area");
  const units = require("../assets/fields.json");

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedField}
        style={styles.unitPicker}
        onValueChange={itemValue => {
          setSelectedField(itemValue);
          prop.setConversionUnit(itemValue);
        }}>
        {units.map(unit => (<Picker.Item label={unit} value={unit} />))}
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  unitPicker: {
    height: 50,
    width: 250,
    marginTop: 30,
    paddingBottom: 180
  }
})