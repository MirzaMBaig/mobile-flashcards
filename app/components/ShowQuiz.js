import React from 'react'
import { Modal, View, Text, TextInput, Button, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native'
import TextButton from './TextButton'
import { getDeck } from '../utils/api';

class ShowQuiz extends React.Component {

    state = {
        questions: [],
        answer: null,
        score: null,
        correct: null,
        counter: 0,
        modalVisible: false,
        title: '',
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    reset() {
        this.setState({
            answer: null,
            score: null,
            correct: null,
            counter: 0,
            modalVisible: false,
        });
    }

    componentDidMount() {
        const { title } = this.props.navigation.state.params
        getDeck(title).then(deck => {
            console.log(deck.questions)
            this.setState({ questions: deck.questions, title: title })
        })
    }

    render() {
        const { navigate } = this.props.navigation
        const { questions, counter, correct, score } = this.state;

        return (
            <View>
        
                {
                    questions.length &&
                    <View>
                        <Text style={styles.title}>Question {counter + 1} of {questions.length}</Text>

                        <Text style={styles.question}>{questions[counter].question}</Text>
                        <TextInput
                            style={styles.answer}
                            onChangeText={(answer) => this.setState({ answer })}
                            value={this.state.answer}
                            placeholder='Enter Answer'
                        />

                        <TouchableOpacity onPress={() => this.onSubmit(navigate)}>
                            <Text style={[styles.createDeckButton, { marginTop: 30, marginBottom: 10 }]}>Submit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.showAnswer(questions[counter])}>
                            <Text style={[styles.createDeckButton]}>Show Answer</Text>
                        </TouchableOpacity>
                    </View>
                }

                <View>
                    {!questions.length &&
                        <Text style={styles.noDataText}>Please add questions to show up here</Text>
                    }
                    {correct !== null &&
                        <Text style={styles.title}>Your answer is {correct ? 'correct' : 'wrong'}</Text>
                    }
                    {score !== null &&
                        <Text style={styles.title}>Your score is  {score}</Text>
                    }
                    <View style={{ marginTop: 22 }}>

                        {questions.length &&
                            <Modal
                                animationType="slide"
                                transparent={false}
                                visible={this.state.modalVisible}
                                onRequestClose={() => {
                                }}>
                                <View style={{ marginTop: 22 }}>
                                    <View>
                                        <Text style={[styles.question, , { marginBottom: 5, paddingBottom: 5 }]} >Question:</Text>
                                        <Text style={[styles.question, { paddingLeft: 10 }]}>{questions[this.state.counter].question}</Text>
                                        <Text style={styles.question}>Answer:</Text>
                                        <Text style={[styles.question, { paddingLeft: 10 }]}>{questions[this.state.counter].answer}</Text>

                                        <TouchableOpacity onPress={() => this.setModalVisible(!this.state.modalVisible)}>
                                            <Text style={[styles.createDeckButton, { padding: 10, margin: 20 }]}>Close</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>
                        }
                    </View>
                </View>
            </View>
        )
    }

    showAnswer(card) {
        console.log(card);
        this.setModalVisible(true);
    }

    onSubmit(navigate) {
        const { questions } = this.state;
        let answer = this.state.answer;
        let counter = this.state.counter;
        let correct = this.state.correct;
        let score = this.state.score || 0;

        if (questions[counter].answer === answer) {
            score++;
            correct = true;
        } else {
            correct = false;
        }
        answer = ''
        counter++;
        if (counter == questions.length) {
            let percentage = score * 100 / questions.length;

            navigate('QuizResult', { score: score, percentage: percentage, title: this.state.title })
            this.reset();
        } else {
            this.setState({ score, correct, counter, answer });
        }

    }

}

const styles = StyleSheet.create({
    title: {
        height: 40,
        borderColor: 'gray',
        padding: 10,
        margin: 20,
        textAlign: 'center',
        fontSize: 20,
    },
    question: {
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
    answer: {
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
    container: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    createDeckButton: {
        padding: 10,
        margin: 20, color: '#fff',
        backgroundColor: '#343a40',
        borderColor: '#343a40',
        textAlign: 'center'
    },
    noDataText: {
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center',
    }
});

export default ShowQuiz;