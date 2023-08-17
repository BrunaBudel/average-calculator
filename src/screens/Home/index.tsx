import { Text, View } from 'react-native';
import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Calculadora de média
      </Text>
      <Text style={styles.subtitle}>Insira as notas para calcular a média</Text>
    </View>
  )
}