import { StyleSheet, Dimensions } from 'react-native';
import { assetColors, assetTypography } from '../../config/styles';

const styles = {
    session: {
        padding: 20
    },
    font: {
        fontFamily: assetTypography.mainFont,
        fontSize: 18
    },
    time: {
        color: assetColors.red,
        fontFamily: assetTypography.mainFont,
        fontSize: 18
    },
    descript: {
        fontFamily: assetTypography.mainFont
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
        alignItems: 'center'
    },
    speakerName: {
        fontFamily: assetTypography.mainFont,
        fontSize: 18,
        color: 'black'
    }
};

export default styles;
