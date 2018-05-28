import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { About } from './screens/about';

import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://api.graph.cool/simple/v1/cjh2hph6n6njl0108f6n59j3j'
});

export default class App extends Component {
    render() {
        return (
            <ApolloProvider>
                <View style={styles.container}>
                    <About />
                </View>
            </ApolloProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});
