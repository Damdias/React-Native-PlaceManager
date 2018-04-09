import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const mainNavigation = () => {
    Promise.all(
        [
            Icon.getImageSource('md-map', 30),
            Icon.getImageSource('ios-share-alt', 30)
        ]
    ).then((sources) => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "awesome-places.FindPlace",
                    label: 'Find Place',
                    title: 'Find Place',
                    icon: sources[0]
                },
                {
                    screen: 'awesome-places.SharePlace',
                    label: 'Share Place',
                    title: 'Share Place',
                    icon: sources[1]
                }
            ]
        });
    });

}

export default mainNavigation;