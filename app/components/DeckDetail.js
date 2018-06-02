import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getDeck } from '../utils/api';
import { purple } from '../utils/colors';
import TextButton from './TextButton';

class DeckDetail extends React.Component {

    state = {
        deck: null,
        title: "null",
    }

    componentDidMount() {
        const { title } = this.props.navigation.state.params
        getDeck(title).then(deck => {
            this.setState({ deck: deck, title: title })
        })
    }

    componentWillReceiveProps(prevProps) {
        let title = this.props.navigation?this.props.navigation.state.params.title:undefined
        if (title) {
            getDeck(title).then(deck => {
                this.setState({ deck: deck, title: title })
            })
        }
    }

    render() {
        const { navigate } = this.props.navigation
        const { deck, title } = this.state;
        return (
            <View>
                <Text style={{ margin: 10, color: purple, fontSize: 25, textAlign: 'center', }}>
                    {title}
                </Text>
                <Text style={{ margin: 10, fontWeight: 'bold' }}>Total questions: {deck && deck.questions.length} </Text>

                <TextButton style={styles.createDeckButton} onPress={() => this.openAddQuestion(navigate, title)}>
                    Add Question
                </TextButton>
                <TextButton style={styles.createDeckButton} onPress={() => this.openShowQuiz(navigate, title)}>
                    Show Quiz
                </TextButton>
            </View>
        )
    }

    openAddQuestion(navigate, title) {
        navigate('AddQuestion', { title: title })
    }

    openShowQuiz(navigate, title) {
        navigate('ShowQuiz', { title: title })
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
    }
});

export default DeckDetail;