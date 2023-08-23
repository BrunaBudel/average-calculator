import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import WalkingPerson from '../../../public/images/walking-person.svg'

import { styles } from './styles'

export function Home(props: {
  navigation: { navigate: (arg0: string) => void }
}) {
  function handleClassList() {
    props.navigation.navigate('classList')
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sistema Universitário</Text>
        <Text style={styles.subtitle}>Acesse o aplicativo</Text>
      </View>
      <WalkingPerson width={425} height={425} />
      <TouchableOpacity style={styles.button} onPress={handleClassList}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}
