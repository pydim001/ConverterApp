import React from 'react';
import { View, Text } from 'react-native';

export default function DefaultScreen(props) {

    const defaults = require("../assets/defaults.json");

    return (
        <View>
            <Text>{Object.keys(defaults)}</Text>
        </View>
    );
}