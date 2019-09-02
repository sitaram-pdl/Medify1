//This is an example code for the popup menu//
import React, { Component } from 'react';
//import react in our code.
import { View, Text, Image, TouchableOpacity } from 'react-native';
//import all the components we are going to use.
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
//import menu and menu item
import { Icon } from "react-native-elements";

export default class CustomMenuIcon extends Component {
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
        this.props.option1Click();
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
            </View>
        );
    }
}