import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import moment from 'moment';

class Session extends Component {
    render() {
        console.log(this.props.navigation.state.params);
        const sessionInfo = this.props.navigation.state.params;

        return (
            <View>
                <Text>{sessionInfo.location}</Text>
                <Text>{sessionInfo.title}</Text>
                <Text>{moment(sessionInfo.time).format('h:mm A')}</Text>
                <Text>{sessionInfo.description}</Text>
                <Text>Presented By:</Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.push('Speaker')}
                >
                    <View>
                        <Text>
                            {sessionInfo.speaker && sessionInfo.speaker.name}
                        </Text>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={{ uri: sessionInfo.speaker.image }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default withNavigation(Session);
