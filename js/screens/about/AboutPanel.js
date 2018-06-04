import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Animated
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export class AboutPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            expanded: false,
            animation: new Animated.Value(),
            maxHeight: '',
            minHeight: ''
        };
    }

    //     componentDidMount() {
    //         setTimeout(this.setState({ minHeight: 0 }));
    //     }
    _setMaxHeight(event) {
        if (this.state.maxHeight === '') {
            this.setState({
                maxHeight: event.nativeEvent.layout.height
            });
        }
    }

    _setMinHeight(event) {
        this.setState({
            minHeight: event.nativeEvent.layout.height
        });
    }
    toggle(index) {
        console.log('hello');
        let initialValue = this.state.expanded
                ? this.state.maxHeight + this.state.minHeight
                : this.state.minHeight,
            finalValue = this.state.expanded
                ? this.state.minHeight
                : this.state.maxHeight + this.state.minHeight;
        console.log(finalValue);
        this.setState({
            expanded: !this.state.expanded
        });
        this.state.animation.setValue(initialValue);
        Animated.spring(this.state.animation, {
            toValue: finalValue
        }).start();
    }
    render() {
        console.log(this.props);

        return (
            <Animated.View
                style={{ height: this.state.animation }}
                key={this.props.index}
            >
                <Text
                    style={styles.aboutTitles}
                    onLayout={this._setMinHeight.bind(this)}
                    onPress={this.toggle.bind(this)}
                >
                    {this.state.expanded ? '-' : '+'} {this.props.title}
                </Text>

                <Text onLayout={this._setMaxHeight.bind(this)}>
                    {this.props.description}
                </Text>
            </Animated.View>
        );
    }
}

AboutPanel.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default AboutPanel;
