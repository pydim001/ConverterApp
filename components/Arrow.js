import React from 'react';
import arrow from "../assets/arrow.png";
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';
import { block } from 'react-native-reanimated';

export default function Arrow(props) {

    const goDefault = () => { props.navigation.navigate('Default'); }

    return (
        <View>
            <TouchableOpacity onPress={goDefault}>
                <Image source={arrow} style={styles.arrow} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    arrow: {
        width: 30,
        height: 30,
        marginTop: -26,
        marginLeft: 260
    }
})