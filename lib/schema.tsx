import {z} from "zod"
export const formSchema = z.object({
    fullName: z.string().min(2).max(70),
    phone: z.string().min(7),
    email: z.string().email(),
    message: z.string().min(2),
})