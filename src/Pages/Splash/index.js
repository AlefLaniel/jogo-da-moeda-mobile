import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const Splash = () => {
    const navigation = useNavigation();


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <LottieView source={require('../../../assets/splash.json')} autoPlay loop={false} speed={0.8} onAnimationFinish={() => navigation.navigate('Home')} />
    </View>
  );
}

export default Splash;