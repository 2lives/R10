import { StyleSheet, Dimensions, Platform } from 'react-native';
import { assetColors, assetTypography } from '../../config/styles';

const styles = StyleSheet.create({
    logoDiv: {
        borderBottomColor: assetColors.lightGrey,
        borderBottomWidth: 2,
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20
    },
    logoImage: { marginBottom: 20 },
    container: {
        margin: 10,
        justifyContent: 'center'
    },

    text: {
        textAlign: 'left',
        fontSize: 18,
        fontFamily: assetTypography.mainFont
    },
    headers: {
        fontSize: 27,
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: 20,
        textAlign: 'left',
        ...Platform.select({
            android: {
                fontFamily: assetTypography.mainFont
            },
            ios: {
                fontFamily: assetTypography.mainFont
            }
        })
    },
    aboutTitles: {
        color: assetColors.purple,
        fontWeight: 'bold',
        fontSize: 18,

        fontFamily: assetTypography.mainFont
    }
});
export default styles;
