//This is an example code for the popup menu//
import React, { Component } from 'react';
//import react in our code.
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet, Button, TouchableHighlight, Alert } from 'react-native';
//import all the components we are going to use.
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
//import menu and menu item
import { Icon } from "react-native-elements";

import Modal from "react-native-modal";

export default class CustomMenuIcon extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }




    _menu = null;
    setMenuRef = ref => {
        this._menu = ref;
    };
    showMenu = () => {
        this._menu.show();
    };
    hideMenu = () => {
        this._menu.hide();
    };
    option1Click = () => {
        this._menu.hide();
        this.setModalVisible(!this.state.modalVisible);;
    };
    option2Click = () => {
        this._menu.hide();
        this.props.option2Click();
    };

    render() {
        return (
            <View style={this.props.menustyle}>
                <Menu
                    ref={this.setMenuRef}
                    button={
                        <TouchableOpacity onPress={this.showMenu}>

                            <Icon color='white' type="ionicon" style={{ width: 30, height: 30 }} name={Platform.OS === "ios" ? "ios-more" : "md-more"} />

                        </TouchableOpacity>
                    }>
                    <MenuItem onPress={this.option1Click}>About us</MenuItem>
                    <MenuDivider />
                    <MenuItem onPress={this.option2Click}>Logout</MenuItem>



                </Menu>
                <Modal
                    animationType={"slide"}
                    animationInTiming={50000}
                    onBackdropPress={() => this.setState({ modalVisible: false })}
                    onSwipeComplete={() => this.setState({ modalVisible: false })}
                    swipeDirection={['down']}

                    transparent={true}
                    visible={this.state.modalVisible}
                >
                    <View style={styles.modal}>
                        <Text style={styles.text}>Modal is open!</Text>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00BCD4",
        height: '90%',
        width: '95%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: 10,
        marginLeft: 3,

    },
    text: {
        color: '#3f2949',
        marginTop: 10
    }
});  