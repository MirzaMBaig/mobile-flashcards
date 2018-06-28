import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { addCardToDeck } from '../utils/api';
import { StyleSheets } from '../utils/styles';

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
                <Text style={StyleSheets.title}>Add Question</Text>
                <View>
                    <TextInput required
                        style={[StyleSheets.item, { marginBottom: 10 }]}
                        onChangeText={(question) => this.setState({ question })}
                        value={this.state.question}
                        placeholder='Enter Question'
                    />
                    <TextInput required
                        style={StyleSheets.item}
                        onChangeText={(answer) => this.setState({ answer })}
                        value={this.state.answer}
                        placeholder='Enter Answer'
                    />
                </View>

                <TouchableOpacity onPress={() => this.onSubmit(navigate, this.state, title)}>
                    <Text style={[StyleSheets.textButton, StyleSheets.createDeckButton]}>
                        Add
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    onSubmit(navigate, card, title) {
        if (card.question.trim() === '' || card.answer.trim() === '') {
            alert('Enter question and answer');
            return;
        }
        addCardToDeck(title, card).then(u => {
            navigate('DeckDetail', { title: title })
        })
    }

}

export default AddQuestion;