import React from 'react';
import { Text, View, SectionList, TouchableHighlight } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';

const SectionListComponent = props => {
    console.log(props);
    return (
        <View key={props.index}>
            <TouchableHighlight
                onPress={() =>
                    props.nav.navigate('Session', {
                        title: props.item.title,
                        id: props.item.id,
                        description: props.item.description,
                        time: props.item.startTime,
                        location: props.item.location,
                        speaker: props.item.speaker
                    })
                }
            >
                <View>
                    <Text style={styles.item}>{props.item.title}</Text>
                    <View style={styles.location}>
                        <Text style={styles.location}>
                            {props.item.location}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    );
};

SectionListComponent.propTypes = {
    item: PropTypes.object.isRequired
};

export default connect(state => ({
    favesData: state.faves.faves
}))(SectionListComponent);
