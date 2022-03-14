import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Conversion from "../components/Coversion";

export default function CustomScreen({ navigation }) {

    const [field, setField] = useState("Area");
    const [custom, setCustom] = useState("");
    const [rate, setRate] = useState();
    let invalidRate = false;
    const defaults = require("../assets/defaults.json");

    const writeCustom = (file, fieldName, name, convertRate) => {
        //const fs = require('fs');
        //const readfile = require(file);
    }

    const submit = () => {
        checkNum(rate);
        if (!invalidRate) {
            navigation.navigate('Home');
        } else {
            Alert.alert("Invalid Rate", "The rate has to be a number", [
                { text: "OK" }
            ])
        }
    }

    const checkNum = (input) => {
        const num = parseFloat(input);
        if (num.toString() == "NaN") {
            invalidRate = true;
        } else {
            setRate(num);
        }
    }

    const checkUnit = (input) => {
        if (input.length > 0) {
            return input;
        } else {
            return "---"
        }
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
                    Add a Custom Unit
                </Text>
            </View>
            <View style={styles.hr} />
            <View>
                <Conversion setConversionUnit={conversion => setField(conversion)} />
            </View>
            <View>
                <Text style={styles.customTxt}>Enter a Custom Unit you want to add</Text>
                <TextInput
                    style={styles.custom}
                    onChangeText={val => setCustom(val)}
                    returnKeyType='done' />
            </View>
            <View>
                <Text style={styles.customTxt}> How many {defaults[field]} are in a/an {checkUnit(custom)}?</Text>
                <TextInput
                    style={styles.custom}
                    onChangeText={val => setRate(val)}
                    returnKeyType='done' />
            </View>
            <TouchableOpacity
                onPress={submit}
                style={styles.submit}>
                <Text>Submit</Text>
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
    custom: {
        borderWidth: 1,
        width: 300,
        height: 30,
        alignSelf: 'center',
        textAlign: 'center',
        padding: 5
    },
    customTxt: {
        marginTop: 40,
        fontSize: 15,
        marginBottom: 5,
        alignSelf: 'center'
    },
    hr: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        width: 300,
        marginTop: 15,
        marginBottom: -10,
        alignSelf: 'center'
    },
    submit: {
        marginTop: 30,
        alignSelf: 'flex-end',
        marginRight: 20,
        backgroundColor: 'lightblue',
        padding: 10,
        borderWidth: 1,

    }
})