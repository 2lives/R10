import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import About from './screens/about';

import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://api.graph.cool/simple/v1/cjh2hph6n6njl0108f6n59j3j'
});

export default class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <View>
                    <About />
                </View>
            </ApolloProvider>
        );
    }
}
