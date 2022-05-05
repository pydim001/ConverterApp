import React, { useState } from "react";
import { Switch, View } from "react-native";

export default function SettingSwitch(props) {

    //off is default
    const [mode, setMode] = useState(false);

    const swap = () => {
        setMode(curr => !curr)
    }

    return (
        <View>
            <Switch
                trackColor={props.trackColor}
                thumbColor={mode ? props.thumbColor[0] : props.thumbColor[1]}
                onValueChange={swap}
                value={mode}
            />
        </View>
    )
}