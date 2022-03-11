import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/Home";
import ReviewScreen from "../screens/ReviewScreen";
import SettingScreen from "../screens/SettingScreen";

const screens = {
    Home: {
        screen: HomeScreen
    },
    Settings: {
        screen: SettingScreen
    },
    Reviews: {
        screen: ReviewScreen
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);