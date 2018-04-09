// import React from 'react';
// import { TextInput, StyleSheet, Text, View, Button } from 'react-native';
// import { connect } from "react-redux";
// import PlaceList from "./src/components/PlaceList/PlaceList";
// import PlaceInput from "./src/components/PlaceInput/PlaceInput";
// import PlaceDetails from "./src/components/PlaceDetails/PlaceDetials";
// import { addPlace, deletePlace, selectPlace, deSelectPlace } from "./src/store/actions/index";

// class App extends React.Component {
//   constructor() {
//     super();
//     // this.state = {
//     //   places: [],
//     //   place: '',
//     //   selectedPlace: null
//     // }
//    // this.onItemSelected = this.onItemSelected.bind(this);
//   }

//   placeChangeHandler = (val) => {
//     this.setState({
//       place: val
//     });
//   }
//   addHandler = (placeName) => {
//     if (placeName === "") {
//       return;
//     }
//     this.props.onAddPlace(placeName);
//     console.log("add new place ", placeName);
//     // this.setState(prevState => {
//     //   return {
//     //     places: prevState.places.concat(
//     //       {
//     //         key: Math.random(),
//     //         name: prevState.place,
//     //         image: {
//     //           uri: "https://vacationidea.com/pix/img25Hy8R/articles/most-beautiful-places-in-the-world_g19_mobi.jpg"
//     //         }
//     //       })
//     //   };
//     // });
//   }
//   onItemDeleted = () => {
//     // this.setState(prev => {
//     //   return {
//     //     places: prev.places.filter((place) => {
//     //       return place.key !== this.state.selectedPlace.key;
//     //     }),
//     //     selectedPlace: null
//     //   }
//     // })
//     this.props.onDeletePlace();
//   }
//   onItemSelected = (key) => {
//     // this.setState(prev => {
//     //   return {
//     //     selectedPlace: prev.places.find((place) => { return place.key === key; })
//     //   }
//     // });
//     //alert(key);
//    this.props.onSelectPlace(key);
//   }
//   closeHandler = () => {
//     // this.setState({
//     //   selectedPlace: null
//     // });
//     this.props.onDeSelectPlace();
//   }
//   render() {

//     return (
//       <View style={styles.container}>
//         <PlaceDetails deleteHandler={this.onItemDeleted} closeHandler={this.closeHandler} selectedPlace={this.props.selectedPlace} />
//         <PlaceInput placeChangeHandler={this.placeChangeHandler} addHandler={this.addHandler} />
//         <PlaceList onItemSelected={this.onItemSelected} places={this.props.places} />
//       </View>
//     );
//   }
// }
// const mapStateToProps = state => {
//   return {
//     places: state.places.places,
//     selectedPlace: state.places.selectedPlace
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPlace: (name) => dispatch(addPlace(name)),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: (key) => dispatch(selectPlace(key)),
//     onDeSelectPlace: () => dispatch(deSelectPlace())
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     padding: 20,
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//   },
//   textcss: {
//     backgroundColor: 'green',
//     borderRadius: 4,
//     padding: 8,
//     margin: 8,
//     borderWidth: 1,
//     borderColor: 'red'
//   },
//   inputcss: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     width: "80%"
//   }
// });

import { Navigation } from "react-native-navigation";
import AuthScreen from "./src/screens/Auth/Auth";
import FindPlace from "./src/screens/FindPlace/FindPlace";
import SharePlace from "./src/screens/SharePlace/SharePlace";

import {Provider} from 'react-redux';
import configureStore from "./src/store/configureStore";

const store = configureStore();

Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen,store,Provider);
Navigation.registerComponent("awesome-places.FindPlace", () => FindPlace,store,Provider);
Navigation.registerComponent("awesome-places.SharePlace", () => SharePlace,store,Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: 'Login'
  }
});