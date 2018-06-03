import { StyleSheet, Dimensions } from 'react-native';
import { assetColors } from '../config/styles';
const window = Dimensions.get('window');

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
        //    color: assetColors.mediumGrey,
        //    fontSize: 18,
        //    fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: assetColors.mediumGrey,
        paddingBottom: 10
    }
});
export default styles;
