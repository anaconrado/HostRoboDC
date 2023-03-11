import { React, useState, Component } from "react";
import { View, Text, TouchableOpacity,TouchableWithoutFeedback, Modal, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';

export default function Calendario() {

    const navigation = useNavigation();
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const [text4, setText4] = useState('');

    const [modal1Visible, setModal1Visible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);
    const [modal3Visible, setModal3Visible] = useState(false);
    const [modal4Visible, setModal4Visible] = useState(false);
    const [modal5Visible, setModal5Visible] = useState(false);

    const chamadaAPI1 = async() => {
        console.log('Chamando API...');
        fetch('http://192.168.0.200:5000/ros/goTo/Auditorio').catch((error)=> console.log(error));
      }

    const chamadaAPI2 = async() => {
    console.log('Chamando API...');
    fetch('http://192.168.0.200:5000/ros/goTo/LE-2').catch((error)=> console.log(error));
    }

    const chamadaAPI3 = async() => {
    console.log('Chamando API...');
    fetch('http://192.168.0.200:5000/ros/goTo/Maker').catch((error)=> console.log(error));
    }
    
    const dismissKeyboard = () => {
        Keyboard.dismiss();
      };

    const goBack = () => {
        navigation.goBack();
      };

      
    const handlePress1 = () => {
        setModal5Visible(true)
        setModal1Visible(false)
        chamadaAPI1()
    }

    const handlePress2 = () => {
        setModal5Visible(true)
        setModal2Visible(false)
        chamadaAPI2()
    }

    const handlePress3 = () => {
        setModal5Visible(true)
        setModal3Visible(false)
        chamadaAPI3()
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goBack}>
                    <MaterialIcons name="arrow-back" style={styles.icon} size={30} color={'white'}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.headerText}> Eventos Próximos </Text>
            <TouchableOpacity onPress={() => setModal1Visible(true)}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Palestra IHC - Terça as 14:00</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModal2Visible(true)}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Game Night - Quinta as 19:30</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModal3Visible(true)}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Workshop React Native - Sexta as 16:00</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModal4Visible(true)} style={styles.addButton}>
                <MaterialIcons name="add-circle" style={styles.icon} size={60} color={'#D1603A'}/>
            </TouchableOpacity>
            {modal1Visible && (
                <Modal 
                    visible={modal1Visible} 
                    animationType="fade"
                    transparent={true}
                    supportedOrientations={['landscape']}
                    >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalBox}>
                            <TouchableOpacity onPress={() => setModal1Visible(false)} >
                                <MaterialIcons name="close" style={styles.icon} size={30} color={'#EEEEEE'}/>
                            </TouchableOpacity>
                            <Text style={styles.title}>Palestra IHC</Text>
                            <View style={styles.line} />
                            <View style={styles.row}>
                                <MaterialIcons name="today" style={styles.icon} size={25} color={'#EEEEEE'}/>
                                <Text style={styles.modalText}>Ter, 14 Mar</Text>
                            </View>
                            <View style={styles.row}>
                                <MaterialIcons name="alarm" style={styles.icon} size={25} color={'#EEEEEE'}/>
                                <Text style={styles.modalText}>14:00</Text>
                            </View>
                            <View style={styles.row}>
                                <MaterialIcons name="location-on" style={styles.icon} size={25} color={'#EEEEEE'}/>
                                <Text style={styles.modalText}>Auditório do DC</Text>
                            </View>
                            <View style={styles.line} />
                            <TouchableOpacity style={styles.row } onPress={handlePress1}>
                                <MaterialIcons name="navigation" style={styles.icon} size={25} color={'#EEEEEE'}/>
                                <Text style={styles.modalText}>Ir ao local de evento</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
            {modal2Visible && (
                <Modal 
                    visible={modal2Visible} 
                    animationType="fade"
                    transparent={true}
                    supportedOrientations={['landscape']}
                    >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalBox}>
                            <TouchableOpacity onPress={() => setModal2Visible(false)} >
                                <MaterialIcons name="close" style={styles.icon} size={30} color={'#EEEEEE'}/>
                            </TouchableOpacity>
                            <Text style={styles.title}>Game Night</Text>
                            <View style={styles.line} />
                            <View style={styles.row}>
                                <MaterialIcons name="today" style={styles.icon} size={25} color={'#EEEEEE'}/>
                                <Text style={styles.modalText}>Qui, 16 Mar</Text>
                            </View>
                            <View style={styles.row}>
                                <MaterialIcons name="alarm" style={styles.icon} size={25} color={'#EEEEEE'}/>
                                <Text style={styles.modalText}>19:30</Text>
                            </View>
                            <View style={styles.row}>
                                <MaterialIcons name="location-on" style={styles.icon} size={25} color={'#EEEEEE'}/>
                                <Text style={styles.modalText}>LE-2</Text>
                            </View>
                            <View style={styles.line} />
                            <TouchableOpacity style={styles.row } onPress={handlePress2}>
                                <MaterialIcons name="navigation" style={styles.icon} size={25} color={'#EEEEEE'}/>
                                <Text style={styles.modalText}>Ir ao local de evento</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
            {modal3Visible && (
                <Modal 
                    visible={modal3Visible} 
                    animationType="fade"
                    transparent={true}
                    supportedOrientations={['landscape']}
                    >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalBox}>
                            <TouchableOpacity onPress={() => setModal3Visible(false)} >
                                <MaterialIcons name="close" style={styles.icon} size={30} color={'#EEEEEE'}/>
                            </TouchableOpacity>
                            <Text style={styles.title}>Workshop React Native</Text>
                            <View style={styles.line} />
                            <View style={styles.row}>
                                <MaterialIcons name="today" style={styles.icon} size={25} color={'#EEEEEE'}/>
                                <Text style={styles.modalText}>Sex, 17 Mar</Text>
                            </View>
                            <View style={styles.row}>
                                <MaterialIcons name="alarm" style={styles.icon} size={25} color={'#EEEEEE'}/>
                                <Text style={styles.modalText}>16:00</Text>
                            </View>
                            <View style={styles.row}>
                                <MaterialIcons name="location-on" style={styles.icon} size={25} color={'#EEEEEE'}/>
                                <Text style={styles.modalText}>Espaço Maker</Text>
                            </View>
                            <View style={styles.line} />
                            <TouchableOpacity style={styles.row } onPress={handlePress3}>
                                <MaterialIcons name="navigation" style={styles.icon} size={25} color={'#EEEEEE'}/>
                                <Text style={styles.modalText}>Ir à local de evento</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
            {modal4Visible && (
                <Modal 
                    visible={modal4Visible} 
                    animationType="fade"
                    transparent={true}
                    supportedOrientations={['landscape']}
                    >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalBox}>
                            <TouchableOpacity onPress={() => setModal4Visible(false)} >
                                <MaterialIcons name="close" style={styles.icon} size={30} color={'#EEEEEE'}/>
                            </TouchableOpacity>
                            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                                    <TextInput
                                        style={styles.title}
                                        onChangeText={setText1}
                                        value={text1}
                                        placeholder={'Título'}
                                    />
                                </TouchableWithoutFeedback>
                            <View style={styles.line} />
                            <View style={styles.row}>
                                <MaterialIcons name="today" style={styles.icon} size={25} color={'#EEEEEE'}/>
                                <TouchableWithoutFeedback onPress={dismissKeyboard}>
                                    <TextInput
                                        style={styles.modalText}
                                        onChangeText={setText2}
                                        value={text2}
                                        placeholder={'Adicione uma data'}
                                    />
                                </TouchableWithoutFeedback>
                            </View>
                            <View style={styles.row}>
                                <MaterialIcons name="alarm" style={styles.icon} size={25} color={'#EEEEEE'}/>
                                <TouchableWithoutFeedback onPress={dismissKeyboard}>
                                    <TextInput
                                        style={styles.modalText}
                                        onChangeText={setText3}
                                        value={text3}
                                        placeholder={'Adicione um horário'}
                                    />
                                </TouchableWithoutFeedback>
                            </View>
                            <View style={styles.row}>
                                <MaterialIcons name="location-on" style={styles.icon} size={25} color={'#EEEEEE'}/>
                                <TouchableWithoutFeedback onPress={dismissKeyboard}>
                                    <TextInput
                                        style={styles.modalText}
                                        onChangeText={setText4}
                                        value={text4}
                                        placeholder={'Adicione local de evento'}
                                    />
                                </TouchableWithoutFeedback>
                            </View>
                            <View style={styles.line} />
                            <TouchableOpacity style={styles.marcarButton } onPress={() => setModal4Visible(false)} >
                                <Text style={styles.buttonTextModal}>Marcar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
            {modal5Visible && (
                <Modal 
                    visible={modal5Visible} 
                    animationType="fade"
                    transparent={true}
                    supportedOrientations={['landscape']}
                    >
                    <View style={styles.modalContainer}>
                        <View style={styles.modal5Box}>
                            <TouchableOpacity onPress={() => setModal5Visible(false)} >
                                <MaterialIcons name="close" style={styles.icon} size={30} color={'#EEEEEE'}/>
                            </TouchableOpacity>
                            <View style={styles.content}>
                                <Text style={styles.title}>Siga-me</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
}