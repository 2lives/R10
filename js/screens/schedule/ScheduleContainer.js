import Schedule from './Schedule';
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import LoadingIndicator from '../../components/Loading';
import styles from './styles';
import { formatSessionData, findFaves } from '../../lib/Helpers';

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
                    if (loading)
                        return <LoadingIndicator style={styles.loading} />;
                    if (error) return <Text>Error</Text>;
                    const faves = findFaves(
                        this.props.favesData,
                        data.allSessions
                    );
                    const arrangedData = formatSessionData(data.allSessions);
                    return (
                        <Schedule
                            arrangedData={arrangedData}
                            faves={faves}
                            nav={this.props.navigation}
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
