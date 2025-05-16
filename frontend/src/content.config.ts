import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';
import os from 'os';

const CONTENT_PATH = import.meta.env.TIL_DIR ? import.meta.env.TIL_DIR.replace(/^~/, os.homedir()) : '';

const tilCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '!README.md'], base: CONTENT_PATH }),
  schema: z.object({
    title: z.string(),
    // date: z.string().refine((date) => !isNaN(Date.parse(date))).optional(),
    tags: z.array(z.string()).optional(),
    slug: z.string().optional(),
    confidence: z.number().optional(),
  }),
});

export const collections = {
  til: tilCollection,
};
