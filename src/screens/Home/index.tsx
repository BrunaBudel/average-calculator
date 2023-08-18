import {
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native'
import { styles } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons/faCalculator'
import Input from '../../components/Input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { calculatorSchema } from '../../utils/schemas'
import { useState } from 'react'
import { faCircleUp } from '@fortawesome/free-solid-svg-icons'

export function Home() {
  const [result, setResult] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ICalcForm>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      grade1: '',
      grade2: '',
    },
  })

  const onSubmit = (data: ICalcForm) => {
    const grade1Float = parseFloat(data.grade1)
    const grade2Float = parseFloat(data.grade2)
    const average = (grade1Float + grade2Float) / 2

    if (isNaN(average)) {
      Alert.alert('Erro', 'Valores inválidos')
    } else {
      setResult(average)
      setShowResult(true)
    }
    Keyboard.dismiss()
    reset({
      grade1: '',
      grade2: '',
    })
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Calculadora de média</Text>
        <Text style={styles.subtitle}>
          Insira as notas para calcular a média
        </Text>
        <View style={styles.pageContent}>
          <View style={styles.form}>
            <Input
              label="Nota 1:"
              placeholder="Digite a primeira nota"
              name="grade1"
              control={control}
              error={errors.grade1}
            />
            <Input
              label="Nota 2:"
              placeholder="Digite a segunda nota"
              name="grade2"
              control={control}
              error={errors.grade2}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit(onSubmit)}
            >
              <FontAwesomeIcon icon={faCalculator} style={styles.icon} />
              <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.resultContainer}>
            {showResult ? (
              <>
                <Text style={styles.resultTitle}>A média é</Text>
                <Text style={styles.resultContent}>{result}</Text>
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  icon={faCircleUp}
                  style={styles.resultIsEmpty}
                  size={35}
                />
                <Text style={styles.resultIsEmpty}>
                  Preencha os campos acima para calcular a média
                </Text>
              </>
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
