import { View, TextInput, Text } from 'react-native'
import { Controller, FieldError } from 'react-hook-form'

import { styles } from './styles'

interface InputProps {
  label: string
  placeholder: string
  control: any
  name: string
  error: FieldError | undefined
}

export default function Input({
  label,
  placeholder,
  control,
  name,
  error,
}: InputProps) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={error ? styles.inputError : styles.input}
            placeholder={placeholder}
            placeholderTextColor="#656F77"
            keyboardType="numeric"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {error && <Text style={styles.error}>{error.message}</Text>}
    </View>
  )
}
