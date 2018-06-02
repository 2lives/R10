import Schedule from './Schedule';
import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import styles from './styles';

const formatSessionData = sessions => {
    return sessions
        .reduce((acc, curr) => {
            const timeExists = acc.find(
                section => section.title === curr.startTime
            );
            timeExists
                ? timeExists.data.push(curr)
                : acc.push({ title: curr.startTime, data: [curr] });
            return acc;
        }, [])
        .sort((a, b) => a.title - b.title);
};

const ScheduleQuery = gql`
    {
        allSessions {
            startTime
            title
            id
            location
            description
            speaker {
                name
                bio
                id
                image
                url
            }
        }
    }
`;

export class ScheduleContainer extends Component {
    render() {
        console.log(this.props);
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Schedule nav={this.props.navigation} />
            </ScrollView>
        );
    }
}

export default ScheduleContainer;
