import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Touchable, Alert } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export default function ReviewScreen({ navigation }) {
    const [req, setReq] = useState();
    const [review, setReview] = useState();

    const submit = () => {
        navigation.navigate('Home');
        Alert.alert("Sent!", "Thank you very much for you response!", [
            { text: "OK" }
        ])
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
                    Reviews & Ideas
                </Text>
            </View>
            <View>
                <Text style={styles.requestTxt}>
                    Request to add a Unit
                </Text>
                <TextInput
                    style={styles.requestInp}
                    returnKeyType='done'
                    onChangeText={val => setReq(val)} />
            </View>
            <View>
                <Text style={styles.reviewTxt}>
                    Write a Review
                </Text>
                <TextInput
                    style={styles.reviewInp}
                    returnKeyType='done'
                    multiline={true}
                    onChangeText={val => setReview(val)} />
            </View>
            <TouchableOpacity
                onPress={submit}>
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
    requestTxt: {
        marginTop: 20,
        marginLeft: 20
    },
    requestInp: {
        borderWidth: 1,
        height: 30,
        width: 350,
        alignSelf: 'center',
        padding: 5
    },
    reviewTxt: {
        marginTop: 20,
        marginLeft: 20
    },
    reviewInp: {
        borderWidth: 1,
        height: 100,
        width: 350,
        alignSelf: 'center',
        padding: 5
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