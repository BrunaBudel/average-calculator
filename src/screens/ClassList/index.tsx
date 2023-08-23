import React from 'react'
import { View, Text, FlatList } from 'react-native'

import { styles } from './styles'
import { ClassCard } from '../../components/ClassCard'
import { turmas } from '../../mocks'

export function ClassList() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Lista de Turmas</Text>
        <Text style={styles.subtitle}>
          Listando turmas cadastradas no sistema
        </Text>
      </View>
      <FlatList
        data={turmas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ClassCard name={item.nome_turma} description={item.descricao} />
        )}
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
