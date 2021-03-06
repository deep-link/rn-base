import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Image, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import LoginScreen from './screens/auth/LoginScreen';

import HomeScreen from './screens/tabs/HomeScreen';
import ScreenOne from './screens/tabs/ScreenOne';
import ScreenTwo from './screens/tabs/ScreenTwo';
import SignupScreen from './screens/auth/SignupScreen';
import {createDrawerNavigator} from 'react-navigation-drawer';

const tab_icon_home = require('./assets/bottom_tabs/tab_icon_home.png');

const SideBarNavigation = createDrawerNavigator({
    HomeScreen:{
        screen: HomeScreen,
    },
    ScreenOne:ScreenOne,
    ScreenTwo:ScreenTwo,
});


const App = createBottomTabNavigator({
    HomeScreen: {
        screen: SideBarNavigation,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
                <Image
                    source={tab_icon_home}
                    style={[styles.defaultIcon, focused ? styles.activeTab : styles.inActiveTab]}/>
            ),
            showIcon: true,
            activeTintColor: '#808080',
            inactiveTintColor: '#303030',
        },
    },
    ScreenOne: {
        screen: ScreenOne,
        navigationOptions: {
            tabBarLabel: 'Screen One',
            tabBarIcon: ({focused}) => (
                <Image
                    source={tab_icon_home}
                    style={[styles.defaultIcon, focused ? styles.activeTab : styles.inActiveTab]}/>
            ),
            showIcon: true,
            activeTintColor: '#808080',
            inactiveTintColor: '#303030',
        },
    },
    ScreenTwo: {
        screen: ScreenTwo,
        navigationOptions: {
            tabBarLabel: 'Screen Two',
            tabBarIcon: ({focused}) => (
                <Image
                    source={tab_icon_home}
                    style={[styles.defaultIcon, focused ? styles.activeTab : styles.inActiveTab]}/>
            ),
            showIcon: true,
            activeTintColor: '#808080',
            inactiveTintColor: '#303030',
        },
    },
}, {
    tabBarOptions: {
        activeTintColor: '#808080',
        inactiveTintColor: '#303030',
    },
});

const Auth = createStackNavigator({
    LoginScreen: LoginScreen,
    SignUpScreen: SignupScreen,
}, {
    defaultNavigationOptions: {
        header: null,
    },
    initialRouteName: 'LoginScreen',
});


console.disableYellowBox = true;

export default createAppContainer(createSwitchNavigator({
    App: App,
    Auth: Auth,
}, {
    initialRouteName: 'App',
}));

const styles = StyleSheet.create({
    defaultIcon: {
        flex: 1,
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    activeTab: {

        tintColor: '#808080',

    },
    inActiveTab: {
        tintColor: '#303030',
    },
});
