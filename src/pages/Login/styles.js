import { StyleSheet } from "react-native";

export default StyleSheet.create({

    header: {
        height: '20%',
        backgroundColor: '#D1603A',
    },
    
    headerText: {
        fontWeight: 'bold',
        marginTop: '3%',
        fontSize: 25,
        color: '#FFFFFF',
        textAlign: 'center',
    },

    form: {
        marginVertical: '3%',
        marginHorizontal: '25%',
    },

    text: {
        color: '#D1603A',
        marginBottom: 10,
        fontSize: 20,
    },

    input: {
        height: '18%',
        marginBottom: '2%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D1603A'
    },

    button: {
        marginTop: '5%', 
        height: '18%',
        padding: 7,
        backgroundColor: '#D1603A',
        borderRadius: 5,
    },

    buttonText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#FFFFFF',
        textAlign: 'center',
    }
})