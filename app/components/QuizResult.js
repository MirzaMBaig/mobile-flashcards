import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { StyleSheets } from '../utils/styles';

class QuizResult extends React.Component {

    render() {

        const { score, percentage, title } = this.props.navigation.state.params
        const { navigate } = this.props.navigation

        return (
            <View>
                <Text style={styles.results}>Your score is {score}</Text>
                <Text style={styles.results}>Your percentage is {percentage}</Text>

                <TouchableOpacity onPress={() => this.openDeckList(navigate, 'ShowQuiz')}>
                    <Text style={[StyleSheets.textButton, StyleSheets.createDeckButton]}>Restart Quiz</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.openDeckList(navigate, 'DeckDetail', title)}>
                    <Text style={[StyleSheets.textButton, StyleSheets.createDeckButton]}>Back to Deck</Text>
                </TouchableOpacity>

            </View>
        )
    }

    openDeckList(navigate, where, title) {
        if (title) {
            navigate(where, { title: title })
        } else {
            navigate(where)
        }
    }

}

const styles = StyleSheet.create({
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
    }
});

export default QuizResult;