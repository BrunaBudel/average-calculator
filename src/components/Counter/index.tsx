import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View, Text } from 'react-native'

import { styles } from './styles'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Controller, FieldError } from 'react-hook-form'

interface CounterProps {
  label: string
  value: string
  name: string
  increment: () => void
  decrement: () => void
}

export function Counter({ label, increment, decrement, value }: CounterProps) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.counter}>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <FontAwesomeIcon icon={faPlus} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholderTextColor="#656F77"
          keyboardType="numeric"
          value={value}
        />
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <FontAwesomeIcon icon={faMinus} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
