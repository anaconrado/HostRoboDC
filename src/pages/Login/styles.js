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
    
    headerText: {
        marginLeft: '38%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#FFFFFF',
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
        padding: '3%',
        fontSize: 25,
        color: '#909090',
        height: '18%',
        marginBottom: '2%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D1603A'
    },

    button: {
        marginTop: '5%', 
        height: '18%',
        padding: '2%',
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