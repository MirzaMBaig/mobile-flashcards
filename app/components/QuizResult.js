import React from 'react'
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native'
import TextButton from './TextButton'
import { submitEntry } from '../utils/api';
import { fetchDeckByTitle } from '../utils/api';
import {purple} from '../utils/colors'
import DeckDetail from './DeckDetail';

class QuizResult extends React.Component {

    render() {

        const { score, percentage, title } = this.props.navigation.state.params
        const { navigate } = this.props.navigation
        return (
            <View>
                <Text style={styles.results}>Your score is {score}</Text>
                <Text style={styles.results}>Your percentage is {percentage}</Text>

                <TextButton style={styles.createDeckButton} onPress={() => this.openDeckList(navigate, 'ShowQuiz')}>
                    Restart Quiz
                </TextButton>
                <TextButton style={styles.createDeckButton} onPress={() => this.openDeckList(navigate, 'DeckDetail', title)}>
                    Back to Deck
                </TextButton>
            </View>
        )
    }

    openDeckList(navigate, where, title) {
        if (title){
            navigate(where, {title:title})
        }else{
            navigate(where)
        }
    }

}

const styles = StyleSheet.create({
    title: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,

    },
    container: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    reset: {
        textAlign: 'center',
        color: purple,
    },
    createDeckButton: {
        padding: 10,
        margin: 20, color: '#fff',
        backgroundColor: '#343a40',
        borderColor: '#343a40'
    },
    results: {
        height: 30,
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 5,
        padding: 2,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
        marginBottom: 10,
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

export default QuizResult;