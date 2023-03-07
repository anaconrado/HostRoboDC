import { StyleSheet } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

export default StyleSheet.create({
    HomeContainer: {
        flex: 1,
        flexDirection: 'row',
        //position: "absolute",
        //top: '50%',
        //left: '50%',
        backgroundColor: '#EEEEEE',
        //transform: [{translateY: -200}, {translateX: -425}],
    },

    leftContainer: {
        paddingVertical: 50,
        backgroundColor: '#D1603A',
        paddingHorizontal: 50,
        width: '40%',
    },

    rightContainer: {
        paddingVertical: 50,
        paddingHorizontal: 10,
        width: '60%',
        //borderLeftWidth: 100,
        //borderLeftColor: '#D1603A',
        //borderBottomWidth: 200,
        //borderBottomColor: 'transparent'
    },

    headerTextLeft: {
        fontWeight: 'bold',
        marginBottom: 40,
        fontSize: 25,
        color: '#FFFFFF',
        textAlign: 'center',
    },

    headerTextRight: {
        fontWeight: 'bold',
        marginBottom: 40,
        fontSize: 25,
        textAlign: 'center',
    },

    paragrafoLeft: {
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center',
    },

    paragrafoRight: {
        fontSize: 18,
        textAlign: 'center',
    },

})