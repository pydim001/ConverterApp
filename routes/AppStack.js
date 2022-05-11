import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/Home";
import ReviewScreen from "../screens/ReviewScreen";
import SettingScreen from "../screens/SettingScreen";
import CustomScreen from "../screens/CustomScreen";
import PaletteScreen from "../screens/Palette";

const screens = {
    Home: {
        screen: HomeScreen
    },
    Settings: {
        screen: SettingScreen
    },
    Reviews: {
        screen: ReviewScreen
    },
    Custom: {
        screen: CustomScreen
    },
    Palette: {
        screen: PaletteScreen
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);