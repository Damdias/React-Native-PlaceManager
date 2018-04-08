import React from "react";
import { View, Text, Button, Image, Modal,StyleSheet } from "react-native";

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
                    <Button onPress={props.deleteHandler} title="Delete" color='red' />
                    <Button onPress={props.closeHandler} title="Close" />
                </View>
            </View>
        </Modal>
    );
}
let styles = StyleSheet.create({
    modelContainer:{
       margin:22
    },
    placeImage:{
        width:"100%",
        height:200
    },
    placeName:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:28
    }
})
export default PlaceDetials;
