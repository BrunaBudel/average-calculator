import React from 'react'
import { View, FlatList } from 'react-native'

import { styles } from './styles'
import { ClassCard } from '../../components/ClassCard'
import { turmas } from '../../mocks'
import { Header } from '../../components/Header'

export function ClassList() {
  return (
    <View style={styles.container}>
      <Header
        title="Lista de turma"
        subtitle="Lista tumas cadastradas no sistema"
      />
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
