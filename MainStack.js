import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './src/Pages/Splash';
import Home from './src/Pages/Home';

const Stack = createNativeStackNavigator();


function MainStack() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Splash' component={Splash} />
                <Stack.Screen name='Home' component={Home}  options={{
                    gestureEnabled: false
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStack;