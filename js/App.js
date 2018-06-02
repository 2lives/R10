import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import { Platform, StyleSheet, Text, View } from 'react-native';
import RootStackNavigator from './navigation/RootStackNavigator';
import { Provider } from 'react-redux';
import store from './redux/store';

const client = new ApolloClient({
    uri: 'https://api.graph.cool/simple/v1/cjh2hph6n6njl0108f6n59j3j'
});

export default class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <RootStackNavigator />
                </Provider>
            </ApolloProvider>
        );
    }
}
