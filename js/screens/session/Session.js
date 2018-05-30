import React, { Component } from 'react';
import { Text, View } from 'react-native';
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
                        {sessionInfo.speaker && (
                            <Image
                                source={{ uri: sessionInfo.speaker.image }}
                            />
                        )}
                        <Text>
                            {sessionInfo.speaker && sessionInfo.speaker.name}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default withNavigation(Session);
