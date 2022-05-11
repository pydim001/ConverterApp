import React from "react";
import { View, TextInput } from "react-native";

export default function ColorInput(props) {
    if (props.type == "Hexadecimal") {
        return <TextInput style={props.style} />;
    }
    else if (props.type == "RGB") {
        return <TextInput style={props.style} />;
    }
    else if (props.type == "HSL") {
        return <TextInput style={props.style} />;
    }
}

