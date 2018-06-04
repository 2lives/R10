import { StyleSheet, Platform } from 'react-native';
import { assetColors, assetTypography } from '../../config/styles';

const styles = {
    session: {
        padding: 20
    },
    font: {
        fontFamily: assetTypography.mainFont,
        fontSize: 32
    },
    time: {
        color: assetColors.red,
        fontFamily: assetTypography.mainFont,
        fontSize: 18
    },

    descript: {
        fontFamily: assetTypography.mainFont,

        lineHeight: 30,
        fontSize: 18,
        fontWeight: '300'
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginRight: 10
    },
    presentedBy: {
        fontFamily: assetTypography.mainFont,
        fontSize: 18,
        color: assetColors.mediumGrey,
        marginBottom: 15
    },
    speaker: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: assetColors.lightGrey,
        marginBottom: 30
    },
    speakerName: {
        fontFamily: assetTypography.mainFont,
        fontSize: 18,
        color: 'black'
    },
    button: {
        backgroundColor: assetColors.purple,
        padding: 10,
        borderRadius: 30,
        width: '80%',
        alignSelf: 'center',
        marginBottom: 20
    },
    buttontxt: {
        ...Platform.select({
            android: {
                fontFamily: assetTypography.mainFont
            },
            ios: {
                fontFamily: assetTypography.mainFont
            }
        }),
        textAlign: 'center',
        fontSize: 18,
        color: 'white'
    }
};

export default styles;
