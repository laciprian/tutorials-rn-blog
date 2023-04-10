import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import IndexScreen from "./src/screens/indexScreen";
import ShowScreen from "./src/screens/showScreen";
import CreateScreen from "./src/screens/createScreen";
import {Provider} from "./src/context/BlogContext";
import React from 'react';

const navigator = createStackNavigator({
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen
}, {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
        title: 'Blogs'
    }
});

const App = createAppContainer(navigator);

export default () => {
    return (
        <Provider>
            <App/>
        </Provider>
    );
}
