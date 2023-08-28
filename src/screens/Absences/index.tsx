import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native'

import { styles } from './styles'
import { Header } from '../../components/Header'
import Input from '../../components/Input'
import { useForm } from 'react-hook-form'
import { absencesSchema } from '../../utils/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { Counter } from '../../components/Counter'

export function Absences() {
  const [count, setCount] = useState(0)

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IAbsencesForm>({
    resolver: zodResolver(absencesSchema),
    defaultValues: {
      className: '',
    },
  })

  function handleIncrement() {
    setCount(count + 1)
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1)
    } else {
      setCount(0)
    }
  }

  const onSubmit = (data: IAbsencesForm) => {
    Alert.alert(data.className, `${count} faltas computadas`)
    Keyboard.dismiss()
    reset({
      className: '',
    })
    setCount(0)
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header
          title="Computar faltas"
          subtitle="Selecione a disciplina e o número de faltas"
        />
        <View style={styles.pageContent}>
          <Input
            label="Matéria:"
            placeholder="Digite o nome da matéria"
            name="className"
            keyboard="default"
            control={control}
            error={errors.className}
          />
          <Counter
            label="Faltas:"
            name="absences"
            increment={handleIncrement}
            decrement={handleDecrement}
            value={count.toString()}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <FontAwesomeIcon icon={faFloppyDisk} style={styles.icon} />
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
