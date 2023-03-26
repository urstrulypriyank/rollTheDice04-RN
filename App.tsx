/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {PropsWithRef, useState} from 'react';
import type {PropsWithChildren} from 'react';
import Dice1 from './assets/dice1.png';
import Dice2 from './assets/dice2.png';
import Dice3 from './assets/dice3.png';
import Dice4 from './assets/dice4.png';
import Dice5 from './assets/dice5.png';
import Dice6 from './assets/dice6.png';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return <Image source={imageUrl} />;
};

function App(): JSX.Element {
  const [diceImageHook, setDiceImageHook] =
    useState<ImageSourcePropType>(Dice1);

  const rollthedice = () => {
    const diceValue = Math.floor(Math.random() * 6) + 1;

    switch (diceValue) {
      case 1: {
        setDiceImageHook(Dice1);
        break;
      }
      case 2: {
        setDiceImageHook(Dice2);
        break;
      }
      case 3: {
        setDiceImageHook(Dice3);
        break;
      }
      case 4: {
        setDiceImageHook(Dice4);
        break;
      }
      case 5: {
        setDiceImageHook(Dice5);
        break;
      }
      case 6: {
        setDiceImageHook(Dice6);
        break;
      }
      default: {
        setDiceImageHook(Dice1);
        break;
      }
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.mainContainer}>
        <View>
          <Dice imageUrl={diceImageHook} />
        </View>

        <Pressable style={styles.btn} onPress={rollthedice}>
          <Text style={styles.btnText}>ROll the Dice</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    margin: 30,
    paddingHorizontal: 50,
    paddingVertical: 10,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  btnText: {},
});

export default App;
