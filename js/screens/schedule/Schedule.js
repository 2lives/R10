import React from 'react';
import { Text, SectionList } from 'react-native';
import styles from '../../components/styles';
import moment from 'moment';
import SectionListComponent from '../../components/SectionListComponent';

const Schedule = props => {
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
            sections={props.arrangedData}
            keyExtractor={(item, index) => item + index}
        />
    );
};
export default Schedule;
