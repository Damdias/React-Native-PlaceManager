import React from "react";
import { View, Text, Button, Image, Modal, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const PlaceDetials = props => {
    let content = null;
    if (props.selectedPlace !== null) {
        content = (
            <View>
                <Image style={styles.placeImage} source={props.selectedPlace.image} />
                <Text style={styles.placeName} >{props.selectedPlace.name}</Text>
            </View>
        );
    }
    return (
        <Modal onRequestClose={props.closeHandler} visible={props.selectedPlace !== null} animationType="slide" >
            <View style={styles.modelContainer}>
                {content}
                <View>
                    <TouchableOpacity onPress={props.deleteHandler}>
                        <View style={styles.deleteButton}>
                            <Icon name="ios-trash" size={30} color="red" />
                        </View>
                    </TouchableOpacity>
                    {/* <Button onPress={props.deleteHandler} title="Delete" color='red' /> */}
                    <Button onPress={props.closeHandler} title="Close" />
                </View>
            </View>
        </Modal>
    );
}
let styles = StyleSheet.create({
    modelContainer: {
        margin: 22
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 28
    },
    deleteButton: {
        alignItems: 'center'
    }
})
export default PlaceDetials;
