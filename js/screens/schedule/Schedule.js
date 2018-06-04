//why does deleting thie file bust my app?
// import React, { Component } from 'react';
// import {
//     Text,
//     View,
//     SectionList,
//     TouchableHighlight,
//     Image
// } from 'react-native';
// import gql from 'graphql-tag';
// import { Query } from 'react-apollo';
// import styles from '../../components/styles';
// import moment from 'moment';
// import { connect } from 'react-redux';
// import SectionListComponent from '../../components/SectionListComponent';

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

// const formatSessionData = sessions => {
//     return sessions
//         .reduce((acc, curr) => {
//             const timeExists = acc.find(
//                 section => section.title === curr.startTime
//             );
//             timeExists
//                 ? timeExists.data.push(curr)
//                 : acc.push({ title: curr.startTime, data: [curr] });
//             return acc;
//         }, [])
//         .sort((a, b) => a.title - b.title);
// };
// console.log(this.props);
// class Schedule extends Component {
//     render() {
//         console.log(this.props.nav.navigate);
//         return (
//             <SectionListComponent nav={this.props.nav} />
//      <Query query={ScheduleQuery}>
//          {({ loading, error, data }) => {
//    if (loading) return <Text>Loading</Text>;
//    if (error) return <Text>Error</Text>;
//    const arrangedData = formatSessionData(data.allSessions);
//    console.log(data);
//    return (
//         <SectionList
//             style={styles.list}
//             renderItem={({ item, location, startTime }, index) => (
//                 <View>
//                     <TouchableHighlight
//                         onPress={() =>
//                             this.props.nav.navigate('Session', {
//                                 title: item.title,
//                                 id: item.id,
//                                 description: item.description,
//                                 time: item.startTime,
//                                 location: item.location,
//                                 speaker: item.speaker
//                             })
//                         }
//                     >
//                         <View>
//                             <Text key={index} style={styles.item}>
//                                 {item.title}
//                             </Text>
//                             <View style={styles.location}>
//                                 <Text style={styles.location}>
//                                     {item.location}
//                                 </Text>
//                             </View>
//                         </View>
//                     </TouchableHighlight>
//                 </View>
//             )}
//             renderSectionHeader={({ section: { title } }) => (
//                 <Text style={styles.time}>
//                     {moment(title).format('h:mm A')}
//                 </Text>
//             )}
//             sections={arrangedData}
//             keyExtractor={(item, index) => item + index}
//         />
//     );
//       }}
//   </Query>
//         );
//     }
// }
// export default connect(state => ({
//     favesData: state.faves.faves
// }))(Schedule);
