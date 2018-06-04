import { StyleSheet, Dimensions } from 'react-native';
import { assetColors } from '../config/styles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    time: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
        paddingLeft: 5,
        backgroundColor: assetColors.lightGrey
    },
    item: {
        height: 50,
        fontFamily: 'Montserrat',
        fontSize: 18
    },
    location: {
        borderBottomWidth: 1,
        borderBottomColor: assetColors.mediumGrey,
        paddingBottom: 10
    },
    heart: {
        alignSelf: 'flex-end',
        marginRight: 20
    }
});
export default styles;
