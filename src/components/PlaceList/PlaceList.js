import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import ListItem from "../ListItem/ListItem";

const placeList = props => {
    return (
        <FlatList style={styles.listContainer}
            data={props.places}
            renderItem={(dataitem)=>(
                <ListItem  placeName={dataitem.item.name} 
                placeImage={dataitem.item.image}
                onPressHandler={() => props.onItemSelected(dataitem.item.key)} />
            )} />
        
    )
}

let styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
})

export default placeList;