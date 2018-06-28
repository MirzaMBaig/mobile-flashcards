import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import DeckList from './DeckList'
import { white, purple, grayishBlue } from '../utils/colors'

export default class App extends React.Component {

  createDeck = () => {
    this.props.navigation.navigate('CreateDeck')
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this.createDeck}>
          <Text style={[styles.createDeckButton]}>
            Create Deck
          </Text>
        </TouchableOpacity>

        <DeckList {...this.props} />
      </View>
    );
  }
}

styles = StyleSheet.create({
  createDeckButton: {
    padding: 30,
    margin: 5, 
    textAlign: 'center',
    color: purple,
    color: white,
    backgroundColor: grayishBlue,
    borderColor: grayishBlue
  }
});
