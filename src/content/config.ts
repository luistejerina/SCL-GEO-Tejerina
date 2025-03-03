import { defineCollection,reference, z } from "astro:content";

const products = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        status: z.string(),
        description: z.string()     
    })
});


const layers = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        status: z.string(),
        description: z.string()     
    })
});

export const collections = { products, layers };