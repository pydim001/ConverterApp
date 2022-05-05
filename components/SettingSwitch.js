import React, { useState } from "react";
import { Switch, View, StyleSheet } from "react-native";

export default function SettingSwitch(props) {

    //off is default
    const [mode, setMode] = useState(false);

    const swap = () => {
        setMode(curr => !curr)
    }

    return (
        <View>
            <Switch
                style={styles.position}
                trackColor={props.trackColor}
                thumbColor={mode ? props.thumbColor[0] : props.thumbColor[1]}
                onValueChange={swap}
                value={mode}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    position: {
        marginTop: -30,
        marginLeft: 250
    }
})