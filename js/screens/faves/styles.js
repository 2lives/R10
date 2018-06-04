import { StyleSheet, Dimensions } from 'react-native';
import { assetColors } from '../../config/styles';
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
    loading: {
        height: window.height / 2,
        width: window.width / 2
    },

    location: {
        borderBottomWidth: 1,
        borderBottomColor: assetColors.mediumGrey,
        paddingBottom: 10
    },
    sectionHeader: {
        backgroundColor: assetColors.mediumGrey
    }
});
export default styles;
