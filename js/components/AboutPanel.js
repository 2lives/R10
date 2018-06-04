import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Animated
} from 'react-native';
import PropTypes from 'prop-types';

export class AboutPanel extends Component {
    constructor(props) {
        super(props);

        this.icons = {
            plus: '+',
            minus: '-'
        };
        this.state = {
            title: props.title,
            expanded: false
        };
    }
    toggle() {}
    render() {
        console.log(this.props);
        let icon = this.icons.plus;
        if (this.state.expanded) {
            icon = this.icons.minus;
        }
        return (
            <View>
                <Text>+ {this.props.title}</Text>

                <Text>{this.props.description}</Text>
            </View>
        );
    }
}

AboutPanel.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default AboutPanel;
