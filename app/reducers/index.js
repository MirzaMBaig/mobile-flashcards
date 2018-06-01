import { RECEIVE_DECKS, ADD_DECK } from '../actions/index'

function decks(state = [], action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                decks: action.decks,
            }
        case ADD_DECK:
            return {
                ...state,
                [action.deck]:{},
            }
        default:
            return {
                state,
            }

    }
}

export default decks