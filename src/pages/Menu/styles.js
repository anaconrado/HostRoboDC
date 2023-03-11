import { StyleSheet } from "react-native";

export default StyleSheet.create({

    header: {
        paddingTop: '1%',
        paddingHorizontal: '2%',
        backgroundColor: '#D1603A',
        height: '10%',
    },

    row: {
        flexDirection: 'row',
    },

    content: {
        margin: '3%',
        alignItems: 'center'
    },
    
    headerText: {
        paddingBottom: '1%',
        fontSize: 20,
        fontWeight: 'bold'
    },

    button: {
        margin: '1%',
        height: 100,
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
        height: '20%',
        backgroundColor: '#D1603A',
        justifyContent: 'flex-end',
    }
})