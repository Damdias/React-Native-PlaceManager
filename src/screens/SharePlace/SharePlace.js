import React from "react";
import { View, Text } from "react-native";
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import { connect } from 'react-redux';
import { addPlace } from "../../store/actions/index";
class SharePlace extends React.Component {
    render() {
        return (
            <View>
                <PlaceInput addHandler={this.props.onAddItem} />
            </View>
        );
    }
}
const mapToDispatch = (dispatch) => {
    return {
        onAddItem: (placeName) => dispatch(addPlace(placeName))
    }
}
export default connect(null, mapToDispatch)(SharePlace);