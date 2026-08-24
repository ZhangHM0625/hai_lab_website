import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'ecp4qzz5',
  dataset: 'production',
  apiVersion: '2026-07-28',
  useCdn: false,
  perspective: 'published',
});

export interface Person {
  id: string;
  name: string;
  title: string;
  image: string;
  website: string;
  scholar: string;
  bio: string;
}

export interface Alumnus {
  id: string;
  name: string;
  image: string;
}

export interface Publication {
  id: string;
  year: string;
  theme: string;
  title: string;
  authors: string;
  journalInfo: string;
  doi: string;
  url: string;
  abstract: string;
}
