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

        console.log(realmObject);
        const sessionInfo = this.props.navigation.state.params;
        return (
            <View style={styles.session}>
                <Text style={styles.font}>{sessionInfo.location}</Text>
                <Text style={styles.font}>{sessionInfo.title}</Text>
                <Text style={styles.time}>
                    {moment(sessionInfo.time).format('h:mm A')}
                </Text>
                <Text style={styles.descript}>{sessionInfo.description}</Text>
                <Text style={styles.presentedBy}>Presented By:</Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.push('Speaker')}
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

                {realmObject.find(obj => obj.id === sessionInfo.id) ? (
                    <Button
                        title="remove from fave"
                        onPress={() =>
                            this.props.dispatch(
                                deleteFaveSession(sessionInfo.id)
                            )
                        }
                    />
                ) : (
                    <Button
                        title="add fave"
                        onPress={() =>
                            this.props.dispatch(
                                createFaveSession(sessionInfo.id)
                            )
                        }
                    />
                )}
            </View>
        );
    }
}
export default connect(state => ({
    favesData: state.faves.faves
}))(withNavigation(Session));
// export default connect()(withNavigation(Session));
