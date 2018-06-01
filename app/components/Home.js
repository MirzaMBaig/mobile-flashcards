import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import TextButton from './TextButton'
import DeckList from './DeckList'

export default class App extends React.Component {

  createDeck = () => {
    this.props.navigation.navigate('CreateDeck')
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TextButton style={styles.createDeckButton} onPress={this.createDeck}>
          Create Deck
          </TextButton>
        <DeckList {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  createDeckButton: {
    padding: 10,
    margin: 20, color: '#fff',
    backgroundColor: '#343a40',
    borderColor: '#343a40'
  }
});
