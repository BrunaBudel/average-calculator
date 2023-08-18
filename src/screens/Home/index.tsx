import { Text, View, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons/faCalculator'
import Input from '../../components/Input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { calculatorSchema } from '../../utils/schemas'
import { z } from 'zod'

// type calculatorSchema = z.infer<typeof calculatorSchema>

export function Home() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ICalcForm>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      grade1: '',
      grade2: '',
    },
  })

  const onSubmit = (data: ICalcForm) => {
    console.log(data)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de média</Text>
      <Text style={styles.subtitle}>Insira as notas para calcular a média</Text>
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
    </View>
  )
}
