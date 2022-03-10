import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/Home";
import SearchScreen from "../screens/SearchScreen";
import SettingScreen from "../screens/SettingScreen";

const screens = {
    Home: {
        screen: HomeScreen
    },
    Settings: {
        screen: SettingScreen
    },
    Search: {
        screen: SearchScreen
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);