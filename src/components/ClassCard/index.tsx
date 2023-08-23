import React from 'react'
import { View, Text } from 'react-native'

import Girls from '../../../public/images/girls.svg'

import { styles } from './styles'

interface ClassCardProps {
  name: string
  description: string
}

export function ClassCard({ name, description }: ClassCardProps) {
  return (
    <View style={styles.classContainer}>
      <View style={styles.classIcon}>
        <Girls width={75} height={75} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.className}>{name}</Text>
        <Text style={styles.classDescription}>{description}</Text>
      </View>
    </View>
  )
}
