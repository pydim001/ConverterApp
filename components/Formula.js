import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Formula(props) {
    return (
        <View style={styles.formulaTxt}>
            <Text><Text style={styles.formula}>Formula:</Text> Multiply by {props.rate}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    formula: {
        backgroundColor: 'lightblue',
    }
})