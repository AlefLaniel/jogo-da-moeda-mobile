import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Container, Title, Image, Result, Button, TitleButton } from "./style";
import { Audio } from "expo-av";
import ElevatedView from "react-native-elevated-view";
import { useFonts, Inter_900Black, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

export default function App() {
  const [sound, setSound] = React.useState();
  const [text, setText] = React.useState("Jogue a Moeda");
  const [image, setImage] = React.useState(
    `${require("./assets/images/cara.png")}`
  );

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/somdamoeda.mp3")
    );
    setSound(sound);

    setImage(`${require("./assets/images/girando.gif")}`);
    console.log("Playing Sound");
    setTimeout(resultadoFinal, 2000);
    await sound.playAsync();
  }

  function resultadoFinal() {
    let random = Math.floor(Math.random() * 2);
    if (random === 0) {
      setText("Deu Cara \n Gire novamente se quiser ☺");
      setImage(`${require("./assets/images/cara.png")}`);
    } else {
      setText("Deu Coroa \n Gire novamente se quiser ☺");
      setImage(`${require("./assets/images/coroa.png")}`);
    }
  }

  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
    Inter_600SemiBold
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <Container>
      <Title>Jogo da Moeda</Title>
      <Image id="moeda" source={image} />
      <Result style={{ fontFamily: 'Inter_600SemiBold' }}>{text}</Result>
      <ElevatedView elevation={3} style={styles.stayElevated}>
        <Button onPress={playSound}>
          <TitleButton>Jogar Dinheiro</TitleButton>
        </Button>
      </ElevatedView>

      <Text style={{ bottom: 0 }}>Desenvolvido por Alef Laniel ☺</Text>
      <StatusBar style="dark" translucent />
    </Container>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2e1e0",
  },

  stayElevated: {
    width: 150,
    height: 50,
    margin: 10,
    backgroundColor: "#7FFFD4",
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20
  },
});
