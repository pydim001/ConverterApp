import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Conversion from "../components/Coversion";

export default function CustomScreen({ navigation }) {

    const [field, setField] = useState();
    const [custom, setCustom] = useState();

    const submit = () => {

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
            <TouchableOpacity onPress={submit}>
                <View style={styles.submit}>
                    <Text>Submit</Text>
                </View>
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
        borderWidth: 1
    }
})