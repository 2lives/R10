import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
// import Faves from './Faves';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { formatSessionData } from '../../lib/Helpers';
import SectionListComponent from '../../components/SectionListComponent';
// import realm from '../../config/models';

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
const FavesArr = Array.from(this.props.favesData);
export class FavesContainer extends Component {
    findFaves = (faves, sessions) => {
        const favourites = sessions.filter(session =>
            faves.find(fave => fave.id === session.id)
        );
        return faves;
    };

    render() {
        return (
            <Query query={ScheduleQuery}>
                {({ loading, error, data }) => {
                    if (loading) return <Text>Loading</Text>;
                    if (error) return <Text>Error</Text>;

                    return (
                        <ScrollView>
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

export default connect(state => ({
    favesData: state.faves.faves
}))(FavesContainer);
