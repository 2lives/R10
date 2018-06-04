import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

export class Speaker extends Component {
    render() {
        console.log(this.props);
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                    <Text>Temporary Back</Text>
                </TouchableOpacity>
                <Text>Speaker</Text>
            </View>
        );
    }
}

export default Speaker;
