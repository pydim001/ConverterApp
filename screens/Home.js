import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Conversion from '../components/Coversion';
import Header from '../components/Header';
import Units from '../components/Units';
import Settings from '../components/Settings';
import Search from '../components/Search';
import Ideas from '../components/Ideas';
import Custom from '../components/Custom';
import Formula from '../components/Formula';
import { getFormula } from '../helper';

export default function Home({ navigation }) {

    const [selectedValue, setSelectedValue] = useState("Area");
    const [selectedUnit, setSelectedUnit] = useState("Square Miles");
    const [secondUnit, setSecondUnit] = useState("Square Miles");
    const [tempState, setTempState] = useState(secondUnit);
    const [value, setValue] = useState(0);
    const [converted, setConverted] = useState();
    const units = require("../assets/fields.json");
    const allUnits = require("../assets/conversion.json");

    const btnAction = function () {
        setTempState(secondUnit)
        setSecondUnit(selectedUnit);
        setSelectedUnit(tempState);
    }

    return (
        <View>
            <Header />
            <Search />
            <Settings navigation={navigation} />
            <Ideas navigation={navigation} />
            <Custom navigation={navigation} />
            <Conversion
                setChangedValue={(conversion) => setSelectedValue(conversion)}
                items={units} />
            <View style={styles.hr} />
            <View style={styles.container}>
                <Units unit={selectedValue} />
                <TextInput
                    style={styles.firstInput}
                    keyboardType='numeric'
                    returnKeyType='done'
                    onChangeText={val => {
                        setValue(val)
                        setConverted(val)
                    }} />
            </View>
            <View style={styles.switchBtn}>
                <Button title="↑↓" color="black" onPress={btnAction} />
            </View>
            <View style={styles.container}>
                <Units unit={selectedValue} />
                <Text style={styles.conversion}>{converted}</Text>
            </View>
            <View>
                <Formula rate={getFormula(selectedValue, selectedUnit, secondUnit)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 5
    },
    firstInput: {
        borderWidth: 1,
        padding: 8,
        marginTop: 150,
        width: 175,
        textAlign: 'center'
    },
    conversion: {
        textAlign: 'center',
        borderWidth: 1,
        width: 175,
        height: 35,
        paddingTop: 8,
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
    hr: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        width: 300,
        marginTop: 15,
        marginBottom: -20,
        alignSelf: 'center'
    }
});
