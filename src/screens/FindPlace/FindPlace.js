import React from "react";
import { View, Text } from "react-native";
import PlaceList from "../../components/PlaceList/PlaceList";
import { connect } from "react-redux";

class FindPlace extends React.Component {
    render() {
        return (
            <View>
                <PlaceList places={this.props.places} />
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        places: state.places.places
    }
}
export default connect(mapStateToProps)(FindPlace);