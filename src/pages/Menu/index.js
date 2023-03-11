import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';

export default function Menu() {

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
      };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goBack}>
                    <MaterialIcons name="arrow-back" style={styles.icon} size={30} color={'white'}/>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Text style ={styles.headerText}>Bem vindo ao DC</Text>
                <View style={styles.row}>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => navigation.navigate('Calendario')}>
                        <ImageBackground
                            source={require('./../../../assets/banner1.jpg')}
                            style={styles.backgroundImage}
                            blurRadius={4}
                            borderRadius={14}
                        >
                            <Text style={styles.buttonText}>Mapa do DC</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => navigation.navigate('Calendario')}>
                        <ImageBackground
                            source={require('./../../../assets/banner1.jpg')}
                            style={styles.backgroundImage}
                            blurRadius={4}
                            borderRadius={14}
                        >
                            <Text style={styles.buttonText}>Sobre mim</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => navigation.navigate('Calendario')}>
                        <ImageBackground
                            source={require('./../../../assets/banner1.jpg')}
                            style={styles.backgroundImage}
                            blurRadius={4}
                            borderRadius={14}
                        >
                            <Text style={styles.buttonText}>Ache uma sala</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => navigation.navigate('Calendario')}>
                        <ImageBackground
                            source={require('./../../../assets/banner1.jpg')}
                            style={styles.backgroundImage}
                            blurRadius={4}
                            borderRadius={14}
                        >
                            <Text style={styles.buttonText}>Eventos</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => navigation.navigate('Calendario')}>
                        <ImageBackground
                            source={require('./../../../assets/banner1.jpg')}
                            style={styles.backgroundImage}
                            blurRadius={4}
                            borderRadius={14}
                        >
                            <Text style={styles.buttonText}>Converse comigo</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => navigation.navigate('Calendario')}>
                        <ImageBackground
                            source={require('./../../../assets/banner1.jpg')}
                            style={styles.backgroundImage}
                            blurRadius={4}
                            borderRadius={14}
                        >
                            <Text style={styles.buttonText}>História do DC</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer} />
        </View>
    );
}