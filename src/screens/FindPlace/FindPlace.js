import React from "react";
import { View, Text } from "react-native";
import PlaceList from "../../components/PlaceList/PlaceList";
import { connect } from "react-redux";

class FindPlace extends React.Component {
    onItemSeleted = key =>{
        let place = this.props.places.find((place)=> place.key === key);
        
        this.props.navigator.push({
            screen:'awesome-places.placeDetials',
            title:place.name,
            passProps:{
                selectedPlace:place
            }

        });
    }
  
    render() {
        return (
            <View>
                <PlaceList  places={this.props.places} onItemSelected={this.onItemSeleted} />
            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        places: state.places.places
    }
}
export default connect(mapStateToProps)(FindPlace);