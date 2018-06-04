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
            expanded: true,
            animation: new Animated.Value(),
            maxHeight: '',
            minHeight: ''
        };
    }

    componentDidMount() {
        this._setMaxHeight.bind(this), this._setMinHeight.bind(this);
    }
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
        console.log(initialValue);
        this.setState({
            expanded: !this.state.expanded
        });
        //    this.setState({ animation: initialValue });
        this.state.animation.setValue(initialValue);
        Animated.spring(this.state.animation, {
            toValue: finalValue
        }).start();
    }
    render() {
        console.log(this.props);
        let icon = this.icons.plus;
        if (this.state.expanded) {
            icon = this.icons.minus;
        }
        return (
            <Animated.View
                style={{ height: this.state.animation }}
                key={this.props.index}
            >
                <Text
                    onLayout={this._setMinHeight.bind(this)}
                    onPress={this.toggle.bind(this)}
                >
                    + {this.props.title}
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
