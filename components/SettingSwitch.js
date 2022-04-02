import React, { useState } from "react";
import { Switch } from "react-native";

export default function SettingSwitch(props) {

    //off is default
    const [mode, setMode] = useState(props.trackMode["off"]);

    return (
        <View>
            <Switch
                trackColor={props.trackColor}
                thumbColor={props.thumbColor}
                onValueChange={setMode(curr => !curr)}
                value={mode}
            />
        </View>
    )
}