import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';

export default class Logo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image style={{ width: 155, height: 90 }}
					source={require('../images/logo.png')} />

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},

});