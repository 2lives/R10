import React from 'react';
import {
    Text,
    View,
    SectionList,
    TouchableHighlight,
    Image
} from 'react-native';
import styles from './styles';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { formatSessionData } from '../lib/Helpers';
import moment from 'moment';
import { Query } from 'react-apollo';

// const ScheduleQuery = gql`
//     {
//         allSessions {
//             startTime
//             title
//             id
//             location
//             description
//             speaker {
//                 name
//                 bio
//                 id
//                 image
//                 url
//             }
//         }
//     }
// `;

const SectionListComponent = props => {
    console.log(props);
    return (
        //    <Query query={ScheduleQuery}>
        //        {({ loading, error, data }) => {
        //            if (loading) return <Text>Loading</Text>;
        //            if (error) return <Text>Error</Text>;
        //            const arrangedData = formatSessionData(data.allSessions);
        //            //  console.log(data);
        //            return (
        <SectionList
            style={styles.list}
            renderItem={({ item, location, startTime }, index) => (
                <View>
                    <TouchableHighlight
                        onPress={() =>
                            props.nav.navigate('Session', {
                                title: item.title,
                                id: item.id,
                                description: item.description,
                                time: item.startTime,
                                location: item.location,
                                speaker: item.speaker
                            })
                        }
                    >
                        <View>
                            <Text key={index} style={styles.item}>
                                {item.title}
                            </Text>
                            <View style={styles.location}>
                                <Text style={styles.location}>
                                    {item.location}
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.time}>
                    {moment(title).format('h:mm A')}
                </Text>
            )}
            sections={props.arrangedData}
            keyExtractor={(item, index) => item + index}
        />
        //            );
        //        }}
        //    </Query>
    );
};

export default connect(state => ({
    favesData: state.faves.faves
}))(SectionListComponent);
