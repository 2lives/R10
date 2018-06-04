import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import moment from 'moment';
import styles from './styles';
import { connect } from 'react-redux';

import {
    createFaveSession,
    deleteFaveSession
} from '../../redux/modules/Favourites';

class Session extends Component {
    render() {
        const realmObject = Array.from(this.props.favesData);
        const sessionInfo = this.props.navigation.state.params;
        const speakerProps = this.props.navigation.state.params.speaker;
        const favourited = Array.from(this.props.favesData).find(
            fave => fave.id === sessionInfo.id
        );
        console.log(favourited);
        return (
            <View style={styles.session}>
                <Text style={styles.presentedBy}>{sessionInfo.location}</Text>
                <Text style={styles.font}>{sessionInfo.title}</Text>
                <Text style={styles.time}>
                    {moment(sessionInfo.time).format('h:mm A')}
                </Text>
                <Text style={styles.descript}>{sessionInfo.description}</Text>
                <Text style={styles.presentedBy}>Presented By:</Text>
                <TouchableOpacity
                    onPress={() =>
                        this.props.navigation.push('Speaker', {
                            name: speakerProps.name,
                            image: speakerProps.image,
                            url: speakerProps.url,
                            bio: speakerProps.bio
                        })
                    }
                >
                    <View style={styles.speaker}>
                        <Image
                            style={styles.image}
                            source={{ uri: sessionInfo.speaker.image }}
                        />
                        <Text style={styles.speakerName}>
                            {sessionInfo.speaker && sessionInfo.speaker.name}
                        </Text>
                    </View>
                </TouchableOpacity>

                {favourited ? (
                    <TouchableOpacity
                        onPress={() =>
                            this.props.dispatch(
                                deleteFaveSession(sessionInfo.id)
                            )
                        }
                        style={styles.button}
                    >
                        <Text style={styles.buttontxt}>Remove from Faves</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        onPress={() =>
                            this.props.dispatch(
                                createFaveSession(sessionInfo.id)
                            )
                        }
                        style={styles.button}
                    >
                        <Text style={styles.buttontxt}>Add to Faves</Text>
                    </TouchableOpacity>
                )}
            </View>
        );
    }
}
export default connect(state => ({
    favesData: state.faves.faves
}))(withNavigation(Session));
