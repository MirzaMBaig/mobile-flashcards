import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { getDeck } from '../utils/api';
import { purple } from '../utils/colors';
import { StyleSheets } from '../utils/styles';

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
        let title = this.props.navigation ? this.props.navigation.state.params.title : undefined
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

                <TouchableOpacity onPress={() => this.openAddQuestion(navigate, title)}>
                    <Text style={[StyleSheets.textButton, StyleSheets.createDeckButton]}>
                        Add Question
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.openShowQuiz(navigate, title)}>
                    <Text style={[StyleSheets.textButton, StyleSheets.createDeckButton]}>
                        Show Quiz
                    </Text>
                </TouchableOpacity>

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

export default DeckDetail;