import Schedule from './Schedule';
import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './styles';

export class ScheduleContainer extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Schedule nav={this.props.navigation} />
            </ScrollView>
        );
    }
}

export default ScheduleContainer;
