import React from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

class PlaceInput extends React.Component {
    constructor() {
        super();
        this.state = {
            place: ''
        }
    }
    placeChangeHandler = (val) => {
        this.setState({
            place: val
        });
    }
    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput onChangeText={this.placeChangeHandler} placeholder="Place Name" style={styles.placesInput} />
                <Button title="Add" style={styles.placeButton} onPress={() => this.props.addHandler(this.state.place)} />
            </View>
        )
    }
}
let styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        paddingTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    placesInput: {
        width: "70%"
    },
    placeButton: {
        width: "30%"
    },
});
export default PlaceInput;