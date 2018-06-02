import { Dimensions, Platform } from 'react-native';

const window = Dimensions.get('window');

export const assetColors = {
    mediumGrey: '#999999',
    lightGrey: '#e6e6e6',
    red: '#cf392a',
    blue: '#8797D6',
    purple: '#9963ea'
};

export const assetTypography = {
    ...Platform.select({
        android: {
            mainFont: 'Montserrat-Regular'
        },
        ios: {
            mainFont: 'Montserrat'
        }
    })
};
