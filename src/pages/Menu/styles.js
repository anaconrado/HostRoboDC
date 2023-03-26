import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        height: '100%'
    },

    header: {
        flexDirection: 'row',
        height: '10%',
        backgroundColor: '#D1603A',
        alignItems: 'center',
        paddingHorizontal: '2%'
    },

    row: {
        flexDirection: 'row',
        width: '90%',
        height: '40%',
        justifyContent: 'center'
    },

    content: {
        height: '80%',
        padding: '3%',
        alignItems: 'center'
    },
    
    headerText: {
        paddingBottom: '2%',
        fontSize: 23,
        fontWeight: 'bold'
    },

    button: {
        margin: '1%',
        height: '90%',
        width: '25%',
        justifyContent: 'center'
    },

    buttonText: {
        marginTop: '20%',
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },

    backgroundImage: {
        width: '100%',
        height: '100%',
        borderRadius: 5
    },
    
    footer: {
        height: '10%',
        backgroundColor: '#D1603A',
    }
})