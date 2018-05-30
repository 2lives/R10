import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

export class Speaker extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                    <Text>Go Back</Text>
                </TouchableOpacity>
                <Text>Speaker</Text>
            </View>
        );
    }
}

export default Speaker;
