import React, { Component } from 'react';
import About from './About';
import { Text, ScrollView, Image, View } from 'react-native';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styles from './styles';

class AboutContainer extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.logoDiv}>
                    <Image
                        style={styles.logoImage}
                        source={require('../../assets/images/r10_logo.png')}
                    />
                </View>
                <Text style={styles.text}>
                    R10 is a conference that focuses on just about any topic
                    related to dev.
                </Text>
                <Text style={styles.headers}>Date & Venue</Text>
                <Text style={styles.text}>
                    The R10 conference will take place on Tuesday, June 27, 2017
                    in Vancouver, BC
                </Text>
                <Text style={styles.headers}>Code of Conduct</Text>
                <About />
            </ScrollView>
        );
    }
}
export default AboutContainer;
