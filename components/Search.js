import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function Search() {
    return (
        <View style={styles.searchBtn}>
            <TouchableOpacity style={styles.press}>
                <Image
                    source={require('../assets/search.png')}
                    style={styles.image} />
            </TouchableOpacity>
        </View>
    )
}

class SearchScreen extends React.Component {

}

const styles = StyleSheet.create({
    image: {
        width: 35,
        height: 35
    },
    searchBtn: {
        marginLeft: 325,
        marginTop: 65,
        width: 45
    },
    press: {

    }
})