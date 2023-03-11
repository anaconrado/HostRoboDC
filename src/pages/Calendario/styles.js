import { StyleSheet } from "react-native";

export default StyleSheet.create({

    header: {
        height: '13%',
        backgroundColor: '#D1603A',
        paddingTop: '1%',
        paddingLeft: '2%'
    },

    headerText: {
        margin: '2%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
    },

    button: {
        padding: '1%',
        width: '80%',
        height: 45,
        marginHorizontal: '5%',
        margin: '0.8%',
        backgroundColor: '#D1603A',
        borderRadius: 10,
    },

    buttonText: {
        color: 'white',
        fontSize: 23,
    },

    addButton: {
        marginLeft: '90%' 
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },

    modalBox: {
        height: '85%',
        aspectRatio: 1,
        backgroundColor: '#D1603A',
        borderRadius: 10,
        padding: 20,
        justifyContent: 'space-between',
    },

    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#EEEEEE',
    },

    line: {
        width: '100%',
        borderBottomColor: '#EEEEEE',
        borderBottomWidth: 1,
        align: 'center'
    },

    row: {
        flexDirection: 'row'
    },

    modalText: {
        padding: '1%',
        fontSize: 17,
        color: '#EEEEEE',
    },

    marcarButton: {
        marginLeft: '75%',
        backgroundColor: '#909090',
        borderRadius: 5,
        width: '25%',
        height: '13%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonTextModal: {
        fontSize: 17,
        color: '#EEEEEE',
    },

    content: {
        height: '50%'
    },

    modal5Box: {
        height: '50%',
        aspectRatio: 1,
        backgroundColor: '#D1603A',
        borderRadius: 10,
        padding: 20,
        justifyContent: 'space-between',
    }

})