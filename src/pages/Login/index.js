import { React, useState } from "react";
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function Login() {

    const navigation = useNavigation();

    const route = useRoute();

    const [text, setText] = useState('');

    const dismissKeyboard = () => {
        Keyboard.dismiss();
      };

      const handlePress = () => {
        navigation.navigate('Menu');
      };

      const { pessoa } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Olá {pessoa}</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.text}>RA ou CPF:</Text>
                <TouchableWithoutFeedback onPress={dismissKeyboard}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setText}
                        value={text}
                    />
                </TouchableWithoutFeedback>
                <Text style={styles.text}>Senha:</Text>
                <TouchableWithoutFeedback onPress={dismissKeyboard}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setText}
                        value={text}
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