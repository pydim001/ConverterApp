import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import Conversion from './components/Coversion';
import Header from './components/Header';

export default function App() {

  const [selectedValue, setSelectedValue] = useState("Area");
  const [selectedUnit, setSelectedUnit] = useState("Square Miles");
  const [secondUnit, setSecondUnit] = useState("Square Miles");
  const [tempState, setTempState] = useState(secondUnit);
  const [value, setValue] = useState(0);
  var converted = 5;
  const units = require("./assets/fields.json");
  const allUnits = require("./assets/conversion.json");

  const btnAction = function () {
    setTempState(secondUnit)
    setSecondUnit(selectedUnit);
    setSelectedUnit(tempState);
  }

  return (
    <View>
      <Header />
      <Conversion setConversionUnit={(conversion) => setSelectedValue(conversion)} />
      <View style={styles.container}>
        <Picker
          selectedValue={selectedUnit}
          style={styles.firstUnit}
          onValueChange={itemValue => (setSelectedUnit(itemValue))}>
          {allUnits[selectedValue].map(unit => (<Picker.Item label={unit} value={unit} />))}
          <TextInput />
        </Picker>
        <TextInput
          style={styles.firstInput}
          keyboardType='numeric'
          returnKeyType='done'
          onChangeText={val => (setValue(val))} />
      </View>
      <View style={styles.switchBtn}>
        <Button title="↑↓" color="black" onPress={btnAction} />
      </View>
      <View style={styles.container}>
        <Picker
          selectedValue={secondUnit}
          style={styles.firstUnit}
          onValueChange={itemValue => (setSecondUnit(itemValue))}>
          {allUnits[selectedValue].map(unit => (<Picker.Item label={unit} value={unit} />))}
          <TextInput />
        </Picker>
        <Text style={styles.conversion}>{converted}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  unitPicker: {
    height: 50,
    width: 200,
    marginTop: 10,
    paddingBottom: 200
  },
  firstUnit: {
    height: 50,
    width: 275
  },
  firstInput: {
    borderWidth: 1,
    padding: 8,
    marginTop: 150,
    width: 175,
    alignContent: 'center'
  },
  conversion: {
    alignContent: 'center',
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 87.5,
    marginTop: 150,
  },
  switchBtn: {
    marginTop: 30,
    width: 50,
    marginLeft: 325,
    marginBottom: -50,
    borderWidth: 1,
    backgroundColor: 'lightblue',
  },

});
