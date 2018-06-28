import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { saveDeckTitle } from '../utils/api';
import { StyleSheets } from '../utils/styles';
import { gray } from '../utils/colors';

class CreateDeck extends React.Component {

    state = {
        text: ''
    }
    render() {
        return (
            <View>
                <Text style={StyleSheets.title}>Create Deck</Text>
                <TextInput
                    style={StyleSheets.item}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder='Enter Deck title'
                />

                <TouchableOpacity onPress={() => this.onSubmit(this.state.text)}>
                    <Text style={[StyleSheets.textButton, StyleSheets.createDeckButton]}>
                        Add Deck
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    onSubmit(title) {
        if (title.trim() === '') {
            alert('Please provide deck name');
            return;
        }
        saveDeckTitle(title);
        this.props.navigation.navigate('DeckDetail', { title: title })
    }

}

const styles = StyleSheet.create({

    container: {
        height: 40,
        borderColor: gray,
        borderWidth: 1
    }
});

export default CreateDeck;