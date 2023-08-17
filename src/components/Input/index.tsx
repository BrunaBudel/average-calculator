import { View, TextInput, Text } from 'react-native'
import { styles } from './styles'

export default function Input(props) {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor="#ccd5ae"
        keyboardType="numeric"
      />
    </View>
  )
}
