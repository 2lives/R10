import React, { Component } from 'react';
import { Text, View, ScrollView, SectionList } from 'react-native';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import moment from 'moment';
import PropTypes from 'prop-types';
import { formatSessionData, findFaves } from '../../lib/Helpers';
import SectionListComponent from '../../components/SectionListComponent';
import LoadingIndicator from '../../components/Loading';

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
export class FavesContainer extends Component {
    render() {
        const FavesArr = Array.from(this.props.favesData);
        return (
            <Query query={ScheduleQuery}>
                {({ loading, error, data }) => {
                    if (loading)
                        return (
                            <LoadingIndicator
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            />
                        );
                    if (error) return <Text>Error</Text>;
                    const arrangedData = formatSessionData(data.allSessions);

                    const faves = findFaves(
                        this.props.favesData,
                        data.allSessions
                    );

                    const formattedData = formatSessionData(faves);
                    console.log(formattedData);

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
                                <Text>{moment(title).format('h:mm A')}</Text>
                            )}
                            sections={formattedData}
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
}))(FavesContainer);
