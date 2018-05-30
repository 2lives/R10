import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Map from './Map';

export class MapContainer extends Component {
    render() {
        return (
            <View>
                <Map />
            </View>
        );
    }
}

export default MapContainer;
