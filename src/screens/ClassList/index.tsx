import React from 'react'
import { View, Text, FlatList } from 'react-native'

import { styles } from './styles'

import Girls from '../../../public/images/girls.svg'

export function ClassList() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Lista de Turmas</Text>
        <Text style={styles.subtitle}>
          Listando turmas cadastradas no sistema
        </Text>
      </View>
      <View style={styles.list}>
        <View style={styles.classContainer}>
          <View style={styles.classIcon}>
            <Girls width={75} height={75} />
          </View>
          <View>
            <Text style={styles.className}>Turma 1</Text>
            <Text style={styles.classDescription}>
              uma simples descrição sobre a matéria
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
