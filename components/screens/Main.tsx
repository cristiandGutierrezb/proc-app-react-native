import { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native"

import ConfigIcon from "../atoms/ConfigIcon"
import HomeCard from "../molecules/HomeCard";

export default function Main() {

  const [text, setText] = useState('')

  return (
    <View>
      <View style={styles.header}>
        <ConfigIcon />
        <TextInput
          style={styles.input}
          onChangeText={setText}
        />
      </View>
      <View style={styles.content}>
        <HomeCard
          text="Peliculas"
          href="/login"
          color="red"
        />
        <HomeCard
          text="Pokémon"
          href="/login"
          color="green"
        />
        <HomeCard
          text="Video Juegos"
          href="/login"
          color="blue"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '10%'
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    height: '90%'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '70%',
    borderRadius: 50,
    backgroundColor: 'white'
  },
});
