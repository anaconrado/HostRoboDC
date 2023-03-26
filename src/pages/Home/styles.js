import { StyleSheet } from "react-native";

export default StyleSheet.create({
    HomeContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#EEEEEE',
        height: '100%'
    },

    leftContainer: {
        paddingVertical: '10%',
        backgroundColor: '#D1603A',
        paddingHorizontal: 50,
        width: '40%',
    },

    rightContainer: {
        alignItems: 'center',
        paddingVertical: '10%',
        paddingHorizontal: 10,
        width: '60%',
    },

    headerLeft: {
        flexDirection: 'row',
    },

    icon: {
        marginHorizontal: '5%',
        color: 'white',
    },

    headerTextLeft: {
        fontWeight: 'bold',
        marginBottom: '15%',
        fontSize: 28,
        color: '#FFFFFF',
        textAlign: 'center',
    },

    headerTextRight: {
        fontWeight: 'bold',
        marginBottom: '10%',
        fontSize: 28,
        textAlign: 'center',
    },

    paragrafoLeft: {
        color: '#FFFFFF',
        fontSize: 23,
        textAlign: 'center',
    },

    paragrafoRight: {
        marginBottom: '7%',
        fontSize: 23,
        textAlign: 'center',
    },

    button: {
        marginTop: 10, 
        width: '60%',
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