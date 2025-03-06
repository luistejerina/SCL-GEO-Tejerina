import { defineCollection,reference, z } from "astro:content";

const products = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),        
        description: z.string(),
        status: z.enum(['In process', 'Completed']),
        type: z.string(),
        division: z.enum(['EDU','SPH','GDI','GIS','LMK','MIG','SCL']),
        link: z.string(),
        technical: z.string(),
        leader: z.string(),
        image: z.object({
            url: z.string().nullable(),
            alt: z.string().nullable(),
        }).nullable(),
        layers: z.array(reference('layers')).nullable().default([]),
    })
});


const layers = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),        
        description: z.string(),
        status: z.enum(['In Process', 'Completed']),
        division: z.enum(['EDU','SPH','GDI','GIS','LMK','MIG','SCL']),
        link: z.string(),
        technical: z.string(),
        leader: z.string(),
        image: z.object({
            url: z.string().nullable(),
            alt: z.string().nullable(),
        }).nullable(),
    })
});

export const collections = { products, layers };