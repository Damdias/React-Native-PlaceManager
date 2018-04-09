import { Navigation } from "react-native-navigation";

const mainNavigation = () => {
    Navigation.startTabBasedApp({
        tabs: [
            {
                screen: "awesome-places.FindPlace",
                label: 'Find Place',
                title: 'Find Place'
            },
            {
                screen: 'awesome-places.SharePlace',
                label: 'Share Place',
                title: 'Share Place'
            }
        ]
    });
}

export default mainNavigation;