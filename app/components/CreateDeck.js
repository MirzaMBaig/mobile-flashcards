import React from 'react'
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native'
import TextButton from './TextButton'
import { saveDeckTitle } from '../utils/api';

class CreateDeck extends React.Component {

    state = {
        text: ''
    }
    render() {
        return (
            <View>
                <Text style={styles.title}>Create Deck</Text>
                <TextInput
                    style={styles.item}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder='Enter Deck title'
                />
                <TextButton style={[styles.createDeckButton,{ padding: 10, margin: 20 }]} onPress={() => this.onSubmit(this.state.text)}>
                    Add Deck
                </TextButton>
            </View>
        )
    }

    onSubmit(title) {
        saveDeckTitle(title);
        this.props.navigation.navigate('Home')
    }

}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center',

    },
    container: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    createDeckButton: {
        padding: 10,
        margin: 20, color: '#fff',
        backgroundColor: '#343a40',
        borderColor: '#343a40'
    },
    item: {
        height: 50,
        backgroundColor: '#f8f9fa',
        borderRadius: 5,
        padding: 2,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
        justifyContent: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
});

export default CreateDeck;