import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import { assetColors } from '../config/styles';
import About from '../screens/about';
import Schedule from '../screens/schedule';
import Map from '../screens/map';
import Session from '../screens/session';
import Speaker from '../screens/speaker';
import Faves from '../screens/faves';
import { sharedNavigationOptions } from './config';

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

export default createBottomTabNavigator(
    {
        About: aboutStack,
        Schedule: scheduleStack,
        Map: mapStack,
        Faves: favesStack
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'About') {
                    iconName = `ios-information-circle${
                        focused ? '' : '-outline'
                    }`;
                } else if (routeName === 'Schedule') {
                    iconName = `ios-calendar${focused ? '' : '-outline'}`;
                } else if (routeName === 'Map') {
                    iconName = `ios-map${focused ? '' : '-outline'}`;
                } else if (routeName === 'Faves') {
                    iconName = `ios-heart${focused ? '' : '-outline'}`;
                }
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            }
        }),

        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: assetColors.mediumGrey,
            labelStyle: {
                fontSize: 10,
                fontFamily: 'Montserrat'
            },
            style: {
                backgroundColor: 'black'
            }
        }
    }
);
