import React from 'react';
import { Text, View, SectionList, TouchableHighlight } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import moment from 'moment';

const SectionListComponent = props => {
    console.log(props);
    return (
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
    );
};

export default connect(state => ({
    favesData: state.faves.faves
}))(SectionListComponent);
