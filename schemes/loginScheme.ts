import { z } from 'zod'

export const LoginScheme = z.object({
  user: z.string()
        .email()
        .min(1, { message: "Campo requerido" })
        .max(100, { message: "No mas de 100 caracteres" }),
  password: z.string()
        .min(1, { message: "Campo requerido" })
        .max(100, { message: "No mas de 100 caracteres" })  
})
