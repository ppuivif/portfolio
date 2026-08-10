import { defineCollection } from 'astro:content';
import { z } from 'zod';


const blogsCollection = defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      datetime: z.string(),
      image: z.string().optional(),
    }),

});

export const collections = {
  'blogs': blogsCollection,
};