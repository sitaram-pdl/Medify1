'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.card}>
                <Image style={styles.thumbnail} source={{ uri: this.props.image }} />
                <Text style={styles.text}>Swipe yes for righT and nope for left</Text>
            </View>
        )
    }
}

class NoMoreCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                { name: '1', image: 'https://i0.wp.com/advergize.com/wp-content/uploads/slogans-on-health-an-apple-a-day.jpg?w=500&ssl=1  ' },
                { name: '2', image: 'https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif' },
                { name: '3', image: 'https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif' },
                { name: '4', image: 'https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif' },
                { name: '5', image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif' },
                { name: '6', image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif' },
                { name: '7', image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif' },
                { name: '8', image: 'https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif' },
                { name: '9', image: 'https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif' },
            ]
        };
    }

    handleYup(card) {
        console.log(`Yup for ${card.text}`)
    }
    handleNope(card) {
        console.log(`Nope for ${card.text}`)
    }
    handleMaybe(card) {
        console.log(`Maybe for ${card.text}`)
    }
    render() {
        // If you want a stack of cards instead of one-per-one view, activate stack mode
        // stack={true}
        return (
            <SwipeCards
                cards={this.state.cards}
                renderCard={(cardData) => <Card {...cardData} />}
                renderNoMoreCards={() => <Home />}

                handleYup={this.handleYup}
                handleNope={this.handleNope}
                handleMaybe={this.handleMaybe}
                hasMaybeAction
            />
        )
    }
}

export default class Home extends React.Component {
    static navigationOptions = {
        header: null,

    };
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                { name: '1', image: 'https://i0.wp.com/advergize.com/wp-content/uploads/slogans-on-health-an-apple-a-day.jpg?w=500&ssl=1  ' },
                { name: '2', image: 'https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif' },
                { name: '3', image: 'https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif' },
                { name: '4', image: 'https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif' },
                { name: '5', image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif' },
                { name: '6', image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif' },
                { name: '7', image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif' },
                { name: '8', image: 'https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif' },
                { name: '9', image: 'https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif' },
            ]
        };
    }

    handleYup(card) {
        console.log(`Yup for ${card.text}`)
    }
    handleNope(card) {
        console.log(`Nope for ${card.text}`)
    }
    handleMaybe(card) {
        console.log(`Maybe for ${card.text}`)
    }
    render() {
        // If you want a stack of cards instead of one-per-one view, activate stack mode
        // stack={true}
        return (
            <SwipeCards
                cards={this.state.cards}
                renderCard={(cardData) => <Card {...cardData} />}
                renderNoMoreCards={() => <NoMoreCards />}

                handleYup={this.handleYup}
                handleNope={this.handleNope}
                handleMaybe={this.handleMaybe}
                hasMaybeAction
            />
        )
    }
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        borderRadius: 5,
        overflow: 'hidden',
        borderColor: 'grey',
        backgroundColor: 'white',
        borderWidth: 1,
        elevation: 1,
    },
    thumbnail: {
        width: 300,
        height: 300,
    },
    text: {
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    noMoreCards: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})