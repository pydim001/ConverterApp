import React from "react";
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import Widget from "../components/Widget";
import ColorSwitch from "../components/ColorSwitch";
import SettingSwitch from "../components/SettingSwitch"

export default function SettingScreen({ navigation }) {

    const save = () => {

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
            <Widget name="Color" component={<ColorSwitch />} />
            <Widget name="Dark Mode" component={<SettingSwitch trackColor={{ false: "black", true: "black" }} thumbColor={["lightblue", "lightblue"]} />} />
            <Widget name="Step Size" component={<TextInput style={styles.stepSize} />} />
            <Widget name="Conversion Mode" component={<SettingSwitch trackColor={{ false: "black", true: "black" }} thumbColor={["lightblue", "lightblue"]} />} />
            <Widget name="Ordering" component={<SettingSwitch trackColor={{ false: "black", true: "black" }} thumbColor={["lightblue", "lightblue"]} />} />
            <Widget name="Formula" component={<SettingSwitch trackColor={{ false: "black", true: "black" }} thumbColor={["lightblue", "lightblue"]} />} />
            <Widget name="Defaults" />
            <TouchableOpacity
                onPress={save}
                style={styles.save}>
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