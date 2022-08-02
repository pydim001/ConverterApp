import React from 'react';
import arrow from "../assets/arrow.png";
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';

export default function Arrow(props) {
    return (
        <View>
            <TouchableOpacity>
                <Image source={arrow} style={styles.arrow} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    arrow: {

    }
})