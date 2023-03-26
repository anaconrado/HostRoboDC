import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        height: '100%'
    },

    contentContainer: {
        height: '75%',
    }, 
    
    header: {
        flexDirection: 'row',
        height: '10%',
        backgroundColor: '#D1603A',
        alignItems: 'center',
        paddingHorizontal: '2%'
    },

    headerText: {
        margin: '2%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
    },

    button: {
        width: '80%',
        marginHorizontal: '5%',
        margin: '0.8%',
        backgroundColor: '#D1603A',
        borderRadius: 10,
    },

    buttonText: {
        margin: '1%',
        color: 'white',
        fontSize: 23,
    },

    addButton: {
        alignSelf: 'flex-end',
        marginRight: '2%',
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },

    modalBox: {
        height: '65%',
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
        height: '40%',
        aspectRatio: 1,
        backgroundColor: '#D1603A',
        borderRadius: 10,
        padding: 20,
        justifyContent: 'space-between',
    }

})