import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'DECK_STORAGE_KEY_123'

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(store => JSON.parse(store));
}

export function getDeck(title) {
  return getDecks().then(results => filterDecks(results,title));
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: { title: title, questions:[]}
  }))
}

export function addCardToDeck(title, card) {
  getDeck(title).then(deck => {
    deck.questions.push(card);
    AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
      [title]: deck
    }));
  })

}

export function submitEntry({ entry, key }) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}

export function removeEntry(key) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((store) => {
      const data = JSON.parse(store)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
    })
}

function filterDecks(results, title) {
  return results === null || title === null
    ? {title:'not defined', questions:[]}
    : results[title];
}