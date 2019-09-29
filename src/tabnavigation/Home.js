//npm install --save react-native-swipe-cards 
//mathiko code install garna lie ho hai
// use strict nafala haii ani


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
        { image: 'https://i0.wp.com/advergize.com/wp-content/uploads/slogans-on-health-an-apple-a-day.jpg?w=500&ssl=1  ' },
        { image: 'https://wisdomquotes.com/wp-content/uploads/health-quotes-man-needs-difficulties-they-are-necessary-for-health-carl-jung-wisdom-quotes.jpg' },
        { image: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj35qb_nPbkAhVK63MBHXN1BrIQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.inspirational-quotes-about-life.net%2Fhealth.html&psig=AOvVaw3RdkO5g0IVT_71OEto5yPg&ust=1569853185890900' },
        { image: 'https://i.pinimg.com/originals/a7/3b/8c/a73b8cd09c403fed17d002ff505346d1.png' },
        { image: '' },
        { image: '' },
        { image: '' },
        { image: '' },
        { image: '' },

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
        { image: 'https://i0.wp.com/advergize.com/wp-content/uploads/slogans-on-health-an-apple-a-day.jpg?w=500&ssl=1  ' },
        { image: 'https://wisdomquotes.com/wp-content/uploads/health-quotes-man-needs-difficulties-they-are-necessary-for-health-carl-jung-wisdom-quotes.jpg' },
        { image: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj35qb_nPbkAhVK63MBHXN1BrIQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.inspirational-quotes-about-life.net%2Fhealth.html&psig=AOvVaw3RdkO5g0IVT_71OEto5yPg&ust=1569853185890900' },
        { image: 'https://i.pinimg.com/originals/a7/3b/8c/a73b8cd09c403fed17d002ff505346d1.png' },
        { image: '' },
        { image: '' },
        { image: '' },
        { image: '' },
        { image: '' },]
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
    borderColor: '#00806b',
    backgroundColor: '#E0FFFF',
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
    paddingBottom: 10,
    color: '#00806b'
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})