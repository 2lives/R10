import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Animated
} from 'react-native';

export class AboutPanel extends Component {
    constructor(props) {
        super(props);

        this.icons = {
            plus: '',
            minus: ''
        };
        this.state = {
            title: props.title,
            expanded: true
        };
    }
    toggle() {}
    render() {
        let icon = this.icons['plus'];
        if (this.state.expanded) {
            icon = this.icons['minus'];
        }
        return (
            <View>
                <Text>+ {this.props.title}</Text>

                <Text>{this.props.description}</Text>
            </View>
        );
    }
}

export default AboutPanel;
