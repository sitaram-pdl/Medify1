//This is an example code for the popup menu//
//npm install native-base --save
//npm i react-native-modal
//react-native link
// CustomMenuIcon ra home pahe copy gara ani hai !!!
import React, { Component } from 'react';
//import react in our code.
import { View, Image, TouchableOpacity, Platform, StyleSheet, Button, TouchableHighlight, Alert } from 'react-native';
//import all the components we are going to use.
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
//import menu and menu item
import { Icon, } from "react-native-elements";
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
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
                        <TouchableOpacity
                            style={{ flexDirection: 'row' }}
                            onPress={this.showMenu}>
                            <Text>  </Text>
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

                        <Card style={{
                            flex: 1,
                            height: '98%', width: '98%',
                            borderRadius: 15,
                            borderWidth: 1,
                        }}>
                            <CardItem header bordered>
                                <Text>About US</Text>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Text>
                                        medify team
                </Text>
                                </Body>
                            </CardItem>

                        </Card>





                    </View>

                </Modal>
            </View >
        );
    }
}

const styles = StyleSheet.create({

    modal: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00806b",
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
