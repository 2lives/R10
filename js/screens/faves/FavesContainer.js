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
import styles from './styles';
import Faves from './Faves';

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

                    return (
                        <Faves
                            formattedData={formattedData}
                            nav={this.props.navigation}
                            faves={faves}
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
