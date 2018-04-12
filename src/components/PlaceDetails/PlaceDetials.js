import React from "react";
import { View, Text, Button, Image, Modal, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {connect} from 'react-redux';
import {deletePlace} from "../../store/actions/index";

class PlaceDetials extends React.Component {
    deleteHandler=()=>{
        this.props.onItemDeleted(this.props.selectedPlace.key);
        this.props.navigator.pop();
    }
    render() {
        return (
            <View>
                <View>
                    <Image style={styles.placeImage} source={this.props.selectedPlace.image} />
                    <Text style={styles.placeName} >{this.props.selectedPlace.name}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={this.deleteHandler}>
                        <View style={styles.deleteButton}>
                            <Icon name="ios-trash" size={30} color="red" />
                        </View>
                    </TouchableOpacity>
                    {/* <Button onPress={props.deleteHandler} title="Delete" color='red' /> */}
                    {/*<Button onPress={props.closeHandler} title="Close" />*/}
                </View>
            </View>

        );
    }
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
let mapToDispatch = (dispatch)=>{
    return {
        onItemDeleted: (key)=> dispatch(deletePlace(key))
    }
}

export default connect(null,mapToDispatch)(PlaceDetials);
