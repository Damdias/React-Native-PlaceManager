import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

let ListItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onPressHandler}>
            <View style={styles.listItem}>
                <Image style={styles.placeimage} source={props.placeImage} />
                <Text>{props.placeName}</Text>
            </View>
        </TouchableOpacity>
    )
}
let styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: '#eee',
        marginTop: 8,
        flexDirection:'row',
        alignItems:'center'

    },
    placeimage: {
        width: 30,
        height: 30,
        marginRight:8
    }
})

export default ListItem;