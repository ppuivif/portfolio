import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';


const blogsCollection = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/blogs' }),
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
