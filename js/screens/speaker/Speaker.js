import React, { Component } from 'react';
// import speakerStyles from './styles'; <-- this breaks the bundle???
import Icon from 'react-native-vector-icons/Ionicons';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView,
    Linking,
    Platform
} from 'react-native';
import { assetTypography, assetColors } from '../../config/styles';

export class Speaker extends Component {
    render() {
        let speakerProps = this.props.navigation.state.params;
        console.log(speakerProps);
        return (
            <View>
                <Icon
                    name={'md-close'}
                    size={30}
                    color={'white'}
                    style={styles.back}
                    onPress={() => this.props.navigation.pop()}
                />

                <View style={styles.container}>
                    <ScrollView>
                        <Image
                            source={{ uri: speakerProps.image }}
                            style={styles.image}
                        />
                        <Text style={styles.name}>{speakerProps.name}</Text>
                        <Text style={styles.bio}>{speakerProps.bio}</Text>
                        <TouchableOpacity
                            onPress={() => Linking.openURL(speakerProps.url)}
                            style={styles.button}
                        >
                            <Text style={styles.buttontxt}>
                                Read More on Wikipedia
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        alignSelf: 'center',
        marginBottom: 20
    },
    bio: {
        ...Platform.select({
            android: {
                fontFamily: assetTypography.mainFont
            },
            ios: {
                fontFamily: assetTypography.mainFont
            }
        }),
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        alignSelf: 'center',
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 25
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        ...Platform.select({
            android: {
                fontFamily: assetTypography.mainFont
            },
            ios: {
                fontFamily: assetTypography.mainFont
            }
        }),
        marginBottom: 20,
        alignSelf: 'center'
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
});
export default Speaker;
