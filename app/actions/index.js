
const RECEIVE_DECKS = 'RECEIVE_DECKS'
const ADD_DECK = 'ADD_DECK'

export function receivedDecks(decks){
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export function addDeck(deck){
    console.log(deck);
    return {
        type: ADD_DECK,
        deck
    }
}