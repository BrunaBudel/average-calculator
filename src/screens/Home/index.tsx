import { Text, View, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons/faCalculator'
import Input from '../../components/Input'

export function Home() {
  function handleAverageCalc() {
    console.log('Calculando média')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de média</Text>
      <Text style={styles.subtitle}>Insira as notas para calcular a média</Text>
      <View style={styles.form}>
        <Input label="Nota 1:" placeholder="Digite a primeira nota" />
        <Input label="Nota 2:" placeholder="Digite a segunda nota" />
        <TouchableOpacity style={styles.button} onPress={handleAverageCalc}>
          <FontAwesomeIcon icon={faCalculator} style={styles.icon} />
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
