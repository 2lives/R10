import React from 'react';
import { SectionList, Text } from 'react-native';
import SectionListComponent from '../../components/SectionListComponent';
import styles from './styles';
import moment from 'moment';
import PropTypes from 'prop-types';

const Faves = props => {
    console.log(props);
    return (
        <SectionList
            renderItem={({ item, index, section }) => (
                <SectionListComponent
                    nav={props.nav}
                    item={item}
                    index={index}
                    section={section}
                    fav={props.faves.find(fave => fave.id === item.id)}
                />
            )}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.sectionHeader}>
                    {moment(title).format('h:mm A')}
                </Text>
            )}
            sections={props.formattedData}
            keyExtractor={(item, index) => item + index}
        />
    );
};

Faves.propTypes = {
    faves: PropTypes.array.isRequired,
    formattedData: PropTypes.array.isRequired
};

export default Faves;
