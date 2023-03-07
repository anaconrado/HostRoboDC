import React from "react";
import { Button, Text, View } from 'react-native';

import styles from './styles';

export default function Home() {
    return (
        <View style={styles.HomeContainer}>
            <View style={styles.leftContainer}>
                <Text style={styles.headerTextLeft}>Robô do DC</Text>
                <Text style={styles.headerTextLeft}>Encontre-se, interaja e se divirta</Text>
                <Text style={styles.paragrafoLeft}>
                    O robô do DC é um projeto da disciplina de Interação Humano Computador, 
                    desenvolvido para ajudar frequentadores do DC em suas tarefas diárias.
                </Text>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.headerTextRight}>Bem vindo ao Departamento de Computação da UFSCar!</Text>
                <Text style={styles.paragrafoRight}>Como deseja se identificar?</Text>
                <Button title="Aluno" color="#D1603A" ></Button>
                <Button title="Professor" color="#D1603A" ></Button>
                <Button title="Visitante" color="#D1603A" ></Button>
            </View>
        </View>
    );
}