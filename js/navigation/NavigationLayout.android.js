import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { assetColors } from '../config/styles';
import About from '../screens/about';
import Schedule from '../screens/schedule';
import Map from '../screens/map';
import Session from '../screens/session';
import Speaker from '../screens/speaker';
import Faves from '../screens/faves';

import { sharedNavigationOptions } from './config';
const renderIcon = (iconName, tintColor) => (
    <Icon name={iconName} size={25} color={tintColor} />
);

const aboutStack = createStackNavigator(
    {
        About: About
    },
    {
        navigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation),
            title: 'About'
        })
    }
);
const mapStack = createStackNavigator(
    {
        Map: Map
    },
    {
        navigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation),
            title: 'Map'
        })
    }
);
const favesStack = createStackNavigator(
    {
        Faves: Faves
    },
    {
        navigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation),
            title: 'Faves'
        })
    }
);

const scheduleStack = createStackNavigator(
    {
        Schedule: Schedule,
        Session: Session
    },
    {
        navigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation),
            title: 'Schedule'
        })
    }
);

export const SpeakerScreen = createStackNavigator(
    {
        Speaker: Speaker
    },
    {
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: 'black'
            },
            headerTitleStyle: {
                color: 'white'
            },

            title: 'About the Speaker'
        })
    }
);

aboutStack.navigationOptions = {
    drawerIcon: ({ tintColor }) => renderIcon('md-information-circle')
};
mapStack.navigationOptions = {
    drawerIcon: ({ tintColor }) => renderIcon('md-map')
};
scheduleStack.navigationOptions = {
    drawerIcon: ({ tintColor }) => renderIcon('md-calendar')
};
favesStack.navigationOptions = {
    drawerIcon: ({ tintColor }) => renderIcon('md-heart')
};

export default createDrawerNavigator({
    About: aboutStack,
    Schedule: scheduleStack,
    Map: mapStack,
    Faves: favesStack
});
