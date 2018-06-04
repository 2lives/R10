import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Text, ScrollView, View, Button } from 'react-native';
import styles from './styles';
import AboutPanel from './AboutPanel';

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
                        console.log(data.allConducts);
                        return data.allConducts.map(
                            ({ title, description }, index) => (
                                <AboutPanel
                                    key={index}
                                    title={title}
                                    description={description}
                                />
                            )
                        );
                    }}
                </Query>
            </View>
        );
    }
}

export default About;
