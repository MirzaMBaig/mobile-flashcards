import React, { Component } from 'react';
import { StyleSheet, Text, View , StatusBar} from 'react-native';
import DeckList from './app/components/DeckList'
import AddQuestion from './app/components/AddQuestion'
import ShowQuiz from './app/components/ShowQuiz'
import QuizResult from './app/components/QuizResult'
import TextButton from './app/components/TextButton'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './app/reducers/index'
import purple from './app/utils/colors'
import {Constants} from 'expo'
import CreateDeck from './app/components/CreateDeck';
import DeckDetail from './app/components/DeckDetail';
import Home from './app/components/Home';
import {createStackNavigator } from 'react-navigation'
import {white} from './app/utils/colors'
import {setLocalNotification} from './app/utils/helpers'

function DeckStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
  AddQuestion: {
    screen: AddQuestion,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
  ShowQuiz: {
    screen: ShowQuiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
  QuizResult: {
    screen: QuizResult,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  }
})

export default class App extends Component {
  
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <DeckStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
        </View>
        
      </Provider>
    );
  }
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
