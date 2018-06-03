import Schedule from './Schedule';
import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import styles from './styles';
import { formatSessionData } from '../../lib/Helpers';
import SectionListComponent from '../../components/SectionListComponent';

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
        return (
            <Query query={ScheduleQuery}>
                {({ loading, error, data }) => {
                    if (loading) return <Text>Loading</Text>;
                    if (error) return <Text>Error</Text>;
                    const arrangedData = formatSessionData(data.allSessions);
                    console.log(data);
                    return (
                        <ScrollView contentContainerStyle={styles.container}>
                            <SectionListComponent
                                nav={this.props.navigation}
                                arrangedData={arrangedData}
                            />
                        </ScrollView>
                    );
                }}
            </Query>
        );
    }
}

export default ScheduleContainer;
