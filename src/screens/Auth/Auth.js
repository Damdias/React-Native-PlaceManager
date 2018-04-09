import React from "react";
import { View, Text, Button } from "react-native";
import mainNavigation from "../MainTabs/startMainTab";

class AuthScreen extends React.Component {
    loginHandler = () => {
        mainNavigation();
    }
    render() {
        return (
            <View>
                <Text>Auth Screen </Text>
                <Button title="Login" onPress={this.loginHandler} />
            </View>
        );
    }
}

export default AuthScreen;