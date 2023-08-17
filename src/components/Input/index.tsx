import { View, TextInput, Text } from 'react-native'
import { styles } from './styles'

type InputProps = {
  label: string
  placeholder: string
}

export default function Input({ label, placeholder }: InputProps) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#ccd5ae"
        keyboardType="numeric"
      />
    </View>
  )
}
