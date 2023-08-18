import { z } from 'zod'

export const calculatorSchema = z.object({
  grade1: z.string().min(1, 'informe a primeira nota'),
  grade2: z.string().min(1, 'informe a segunda nota'),
})
