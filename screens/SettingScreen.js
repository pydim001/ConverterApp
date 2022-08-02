import React, { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import Widget from "../components/Widget";
import ColorSwitch from "../components/ColorSwitch";
import SettingSwitch from "../components/SettingSwitch"
import Arrow from "../components/Arrow"

export default function SettingScreen({ navigation }) {

    const [darkMode, setDarkMode] = useState(false);
    const [convMode, setConvMode] = useState(false);
    const [orderMode, setOrderMode] = useState(false);
    const [formulaMode, setFormulaMode] = useState(false);
    const [stepSize, setStepSize] = useState(0.0);

    const save = () => {
        dark(darkMode);
        order(orderMode);
        formula(formulaMode);
        convert(convMode);
    }

    const dark = (curr) => {

    }

    const order = (curr) => {

    }

    const formula = (curr) => {

    }

    const convert = (curr) => {

    }

    return (
        <View>
            <View style={styles.back}>
                <Button
                    title="Back"
                    onPress={() => { navigation.navigate('Home') }} />
            </View>
            <View style={styles.header}>
                <Text style={styles.txt}>
                    Settings
                </Text>
            </View>
            <Widget name="Color"
                component={<ColorSwitch navigation={navigation} />} />
            <Widget name="Dark Mode"
                component={<SettingSwitch
                    trackColor={{ false: "red", true: "black" }}
                    thumbColor={["lightblue", "lightblue"]}
                    do={curr => setDarkMode(curr)} />} />
            <Widget name="Step Size"
                component={<TextInput
                    style={styles.stepSize}
                    onChangeText={val => setStepSize(val)} />} />
            <Widget name="Conversion Mode"
                component={<SettingSwitch
                    trackColor={{ false: "black", true: "black" }}
                    thumbColor={["lightblue", "lightblue"]}
                    do={curr => setConvMode(curr)} />} />
            <Widget name="Ordering"
                component={<SettingSwitch
                    trackColor={{ false: "black", true: "black" }}
                    thumbColor={["lightblue", "lightblue"]}
                    do={curr => setOrderMode(curr)} />} />
            <Widget name="Formula"
                component={<SettingSwitch
                    trackColor={{ false: "black", true: "black" }}
                    thumbColor={["lightblue", "lightblue"]}
                    do={curr => setFormulaMode(curr)} />} />
            <Widget name="Defaults" component={<Arrow />} />
            <TouchableOpacity
                onPress={save}
                style={styles.save}>
                <Text>Save</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center'
    },
    back: {
        paddingTop: 50,
        paddingLeft: 20,
        alignItems: 'flex-start'
    },
    txt: {
        fontSize: 20
    },
    stepSize: {
        marginTop: -30,
        marginLeft: 250,
        borderWidth: 1,
        width: 50,
        height: 30,
        padding: 5,
        textAlign: 'center'
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