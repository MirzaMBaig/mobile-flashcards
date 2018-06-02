import React from 'react'
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native'
import TextButton from './TextButton'
import { addCardToDeck } from '../utils/api';

class AddQuestion extends React.Component {

    state = {
        question: '',
        answer: '',
    }

    render() {
        const { title } = this.props.navigation.state.params
        const { navigate } = this.props.navigation

        return (
            <View>
                <Text style={styles.title}>Add Question</Text>
                <View>
                    <TextInput required
                        style={[styles.item,{marginBottom:10}]}
                        onChangeText={(question) => this.setState({ question })}
                        value={this.state.question}
                        placeholder='Enter Question'
                    />
                    <TextInput required
                        style={styles.item}
                        onChangeText={(answer) => this.setState({ answer })}
                        value={this.state.answer}
                        placeholder='Enter Answer'
                    />
                </View>
                <TextButton style={styles.createDeckButton} onPress={() => this.onSubmit(navigate, this.state, title)}>
                    Add
                </TextButton>
            </View>
        )
    }

    onSubmit(navigate, card, title) {
        if (card.question==='' || card.answer===''){
            alert('Enter question and answer');
            return;
        }
        addCardToDeck(title, card).then(u=> {
            navigate('DeckDetail', { title: title })
        })
    }

}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center',

    },
    item: {
        height:50,
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
    createDeckButton: {
        padding: 10,
        margin: 20, color: '#fff',
        backgroundColor: '#343a40',
        borderColor: '#343a40'
    }
});

export default AddQuestion;