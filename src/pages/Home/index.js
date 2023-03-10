import React from "react";
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';

export default function Home() {

    const navigation = useNavigation();

    return (
        <View style={styles.HomeContainer}>
            <View style={styles.leftContainer}>
                <View style={styles.headerLeft}>
                    <MaterialIcons name="android" style={styles.icon} size={30}/>
                    <Text style={styles.headerTextLeft}>Robô do DC</Text>
                </View>
                <Text style={styles.headerTextLeft}>Encontre-se, interaja e se divirta</Text>
                <Text style={styles.paragrafoLeft}>
                    O robô do DC é um projeto da disciplina de Interação Humano Computador, 
                    desenvolvido para ajudar frequentadores do DC em suas tarefas diárias.
                </Text>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.headerTextRight}>Bem vindo ao Departamento de Computação da UFSCar!</Text>
                <Text style={styles.paragrafoRight}>Como deseja se identificar?</Text>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigation.navigate('Login', { pessoa: 'Aluno' })}>
                    <View>
                        <Text style={styles.buttonText}>Aluno</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigation.navigate('Login', { pessoa: 'Professor' })}>
                    <View>
                        <Text style={styles.buttonText}>Professor</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}  
                    onPress={() => navigation.navigate('Login', { pessoa: 'Visitante' })}>
                    <View>
                        <Text style={styles.buttonText}>Visitante</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}