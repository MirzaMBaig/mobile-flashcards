import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { red } from '../utils/colors'
import TextButton from './TextButton'
import { getDecks } from '../utils/api';

class DeckList extends React.Component {

    state = {
        decks: null,
    }

    componentDidMount() {
        getDecks().then(decks => {
            this.setState({ decks })
        })
    }

    componentDidUpdate() {
        getDecks().then(decks => {
            this.setState({ decks })
        })
    }

    openDeck(navigate, title, totalQuestions = 0) {
        navigate('DeckDetail', { title: title, totalQuestions: totalQuestions })
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    {this.state.decks &&
                        Object.keys(this.state.decks).map(deck => {
                            return (
                                <View key={deck} style={styles.item}>
                                    <TouchableOpacity key={deck} onPress={() => this.openDeck(navigate, this.state.decks[deck].title, this.state.decks[deck].length)}>
                                        <Text style={[styles.container, { marginBottom: 10, fontSize: 20 }]} >
                                            Quiz: {this.state.decks[deck].title}

                                        </Text>
                                        <Text style={[styles.container, { fontSize: 14}]}>
                                            Number of Questions: {this.state.decks[deck].questions ? this.state.decks[deck].questions.length : 0}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                    {!this.state.decks &&
                        <Text style={styles.noDataText}>
                            No Deck Available
                        </Text>
                    }
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        backgroundColor: '#f8f9fa',
        borderColor: '#f8f9fa',
        marginLeft: 2, marginBottom: 20
    },
    containerBody: {
        marginBottom: 20,
        padding: 5,
        backgroundColor: '#f8f9fa',
        borderColor: '#f8f9fa',
        marginLeft: 2, marginBottom: 20,
        borderRadius: .25,
    },
    item: {
        backgroundColor: '#f8f9fa',
        borderRadius: 16,
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
    noDataText: {
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center',
    }
})

export default DeckList;
