import { defineField, defineType } from 'sanity';

const publicationThemes = [
  { title: 'Technologies for Advertising, PR & Journalism', value: 'advertising' },
  { title: 'Smartphone and Mobile Technologies', value: 'smartphone' },
  { title: 'HCI Theories, Concepts and Philosophy', value: 'hci-theory' },
  { title: 'Speech User Interface', value: 'speech' },
  { title: 'Social Media and Internet', value: 'social-media' },
  { title: 'Healthcare Technology', value: 'healthcare' },
  { title: 'Human Robot Interaction', value: 'robot' },
  { title: 'Educational Technology', value: 'education' },
  { title: 'Technology Policy and Public Intervention', value: 'policy' },
  { title: 'Computer Games and Entertainment Technologies', value: 'games' },
  { title: 'Financial Technology', value: 'fintech' },
];

export const publicationType = defineType({
  name: 'publication',
  title: 'HAIL/Publications',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (rule) => rule.required().regex(/^\d{4}$/, { name: 'four-digit year' }),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'journalInfo',
      title: 'Journal / Publication Information',
      description: 'Basic HTML such as <em> is supported by the website.',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'doi',
      title: 'DOI',
      description: 'Enter only the DOI, without https://doi.org/.',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Paper URL',
      type: 'url',
    }),
    defineField({
      name: 'abstract',
      title: 'Abstract',
      description: 'Optional. Basic HTML such as <strong> and <br> is supported by the website.',
      type: 'text',
      rows: 12,
    }),
    defineField({
      name: 'theme',
      title: 'Research Theme',
      type: 'string',
      options: {
        list: publicationThemes,
      },
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Year, newest first',
      name: 'yearDesc',
      by: [
        { field: 'year', direction: 'desc' },
        { field: 'title', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      year: 'year',
      authors: 'authors',
    },
    prepare({ title, year, authors }) {
      return {
        title,
        subtitle: [year, authors].filter(Boolean).join(' · '),
      };
    },
  },
});
