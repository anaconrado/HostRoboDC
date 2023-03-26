import { React, useState } from "react";
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Login() {

    const navigation = useNavigation();

    const route = useRoute();

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

    const dismissKeyboard = () => {
        Keyboard.dismiss();
      };

      const handlePress = () => {
        navigation.navigate('Menu');
      };

      const goBack = () => {
        navigation.goBack();
      };

      const { pessoa } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goBack}>
                    <MaterialIcons name="arrow-back" style={styles.icon} size={30} color={'white'}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>Olá {pessoa}</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.text}>RA ou CPF:</Text>
                <TouchableWithoutFeedback onPress={dismissKeyboard}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setText1}
                        value={text1}
                    />
                </TouchableWithoutFeedback>
                <Text style={styles.text}>Senha:</Text>
                <TouchableWithoutFeedback onPress={dismissKeyboard}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setText2}
                        value={text2}
                    />
                </TouchableWithoutFeedback>
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <View>
                        <Text style={styles.buttonText}>Login</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}