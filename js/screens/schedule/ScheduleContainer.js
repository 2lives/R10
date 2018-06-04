import Schedule from './Schedule';
import React, { Component } from 'react';
import { Text, View, ScrollView, SectionList } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import moment from 'moment';

import styles from './styles';
import { formatSessionData, findFaves } from '../../lib/Helpers';
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
                    const faves = findFaves(
                        this.props.favesData,
                        data.allSessions
                    );
                    const arrangedData = formatSessionData(data.allSessions);
                    console.log(arrangedData);
                    console.log(faves);
                    return (
                        <SectionList
                            renderItem={({ item, index, section }) => (
                                <SectionListComponent
                                    nav={this.props.navigation}
                                    item={item}
                                    index={index}
                                    section={section}
                                    fav={faves.find(
                                        fave => fave.id === item.id
                                    )}
                                />
                            )}
                            renderSectionHeader={({ section: { title } }) => (
                                <Text style={styles.sectionHeader}>
                                    {moment(title).format('h:mm A')}
                                </Text>
                            )}
                            sections={arrangedData}
                            keyExtractor={(item, index) => item + index}
                        />
                    );
                }}
            </Query>
        );
    }
}

export default connect(state => ({
    favesData: state.faves.faves
}))(ScheduleContainer);
