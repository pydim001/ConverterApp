import { StyleSheet, Text, View } from "react-native";
import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react';

export default function Conversion(prop) {
  const [selectedField, setSelectedField] = useState("Area");
  const units = ["Area", "Currency", "Data Tranfer Rate", "Digital Storage",
    "Energy", "Frequency", "Fuel Economy", "Length", "Mass", "Plane Angle",
    "Pressure", "Speed", "Temperature", "Time", "Volume"];

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedField}
        style={styles.unitPicker}
        onValueChange={itemValue => {
          console.log(selectedField);
          setSelectedField(itemValue);
          prop.setConversionUnit(selectedField);
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
    width: 200,
    marginTop: 30,
    paddingBottom: 180
  }
})