import { StyleSheet } from 'react-native'
import { purple, white, lightGrayishBlue, grayishBlue } from '../utils/colors'

export const StyleSheets = StyleSheet.create({
    textButton: {
        textAlign: 'center',
        color: purple,
    },
    createDeckButton: {
        padding: 10,
        margin: 20,
        color: white,
        backgroundColor: grayishBlue,
        borderColor: grayishBlue
    },
    item: {
        height: 50,
        backgroundColor: lightGrayishBlue,
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
    }, title: {
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center',

    },
})