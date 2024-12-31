import { defineCollection, z } from "astro:content";
// z -> zod una libreria para definir/validar esquemas
// defineCollection -> una función para definir una colección de datos

const books = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(),
        readtime: z.number(),
        description: z.string(),
        buy: z.object({
            mx: z.string().url(),
            us: z.string().url()
        }),
    })
})

export const collections = { books }