import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Faves from './Faves';
import { connect } from 'react-redux';
// import realm from '../../config/models';

export class FavesContainer extends Component {
    render() {
        const realmObj = Array.from(this.props.favesData);

        realmObj.map(obj => {
            console.log(obj.id);
        });

        console.log(this.props);
        return (
            <View>
                <Faves favesData={this.props} />
            </View>
        );
    }
}

export default connect(state => ({
    favesData: state.faves.faves
}))(FavesContainer);
