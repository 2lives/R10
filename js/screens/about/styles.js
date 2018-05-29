import { StyleSheet, Dimensions } from 'react-native';
import assetColors from '../../config/styles';
const window = Dimensions.get('window');

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
        fontSize: 18
    },
    headers: {
        fontSize: 27,
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: 20,
        textAlign: 'left'
    },
    aboutTitles: {
        color: assetColors.purple,
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 20
    }
});
export default styles;
