import React from 'react';
import { StyleSheet, View, Platform, Text } from 'react-native';
import { Header } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { assetColors } from '../config/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const GradientHeader = props => (
    <View style={{ backgroundColor: 'white', overflow: 'hidden' }}>
        <LinearGradient
            colors={[assetColors.red, assetColors.purple]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={[StyleSheet.absoluteFill, { height: 64, width: '100%' }]}
        />
        <Header {...props} />
    </View>
);

export const sharedNavigationOptions = navigation => ({
    headerBackTitle: null,

    headerLeft: Platform.select({
        android: (
            <Text onPress={() => navigation.toggleDrawer()}>
                <Ionicons name="md-menu" size={25} color="black" />
            </Text>
        )
    }),

    header: props => <GradientHeader {...props} />,
    headerStyle: {
        backgroundColor: 'transparent'
    }
});
