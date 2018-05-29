import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import styles from './styles';

const AboutQuery = gql`
    {
        allConducts {
            id
            title
            description
        }
    }
`;

class About extends Component {
    render() {
        return (
            <View>
                <Query query={AboutQuery}>
                    {({ loading, error, data }) => {
                        if (loading) return <Text>Loading</Text>;
                        if (error) return <Text>Error</Text>;

                        return data.allConducts.map(
                            ({ title, description }, index) => (
                                <View key={index}>
                                    <Text style={styles.aboutTitles}>
                                        + {title}
                                    </Text>

                                    <Text
                                        id={'conduct' + index}
                                        style={styles.text}
                                    >
                                        {description}
                                    </Text>
                                </View>
                            )
                        );
                    }}
                </Query>
            </View>
        );
    }
}

export default About;
