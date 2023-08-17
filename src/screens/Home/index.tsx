import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons/faCalculator'

export function Home() {
  function handleAverageCalc() {
    console.log('Calculando média')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de média</Text>
      <Text style={styles.subtitle}>Insira as notas para calcular a média</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a primeira nota"
        placeholderTextColor="#ccd5ae"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a segunda nota"
        placeholderTextColor="#ccd5ae"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleAverageCalc}>
        <FontAwesomeIcon icon={faCalculator} style={styles.icon} />
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  )
}
