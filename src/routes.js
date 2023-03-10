import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();

import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Mapa from './pages/Mapa';
{/*}
import Calendario from './pages/Calendario';
import ConverseComigo from './pages/ConverseComigo';
import EventosInscritos from './pages/EventosInscritos';
import Identificacao from './pages/Identificacao';
import MenuUsuario from './pages/MenuUsuario';
import Perfil from './pages/Perfil';
import SobreMim from './pages/SobreMim';
*/}
export default function Routes() {
    return (
        <NavigationContainer>
            
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Menu" component={Menu} />
                <AppStack.Screen name="Mapa" component={Mapa} />
                {/*<AppStack.Screen name="Calendario "component={Calendario} />
                <AppStack.Screen name="ConverseComigo" component={ConverseComigo} />
                <AppStack.Screen name="EventosInscritos" component={EventosInscritos} />
                <AppStack.Screen name="Identificacao" component={Identificacao} />
                <AppStack.Screen name="MenuUsuario" component={MenuUsuario} />
                <AppStack.Screen name="Perfil" component={Perfil} />
                <AppStack.Screen name="SobreMim" component={SobreMim} />
    */}
            </AppStack.Navigator>
        
        </NavigationContainer>
    );
}