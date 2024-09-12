import { z } from 'zod';

import { fetchFacetedSearch, PublicSearchParamsSchema } from './fetch-faceted-search';

import { Document } from '@contentful/rich-text-types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const publicParamKeys = PublicSearchParamsSchema.keyof();

export type PublicParamKeys = z.infer<typeof publicParamKeys>;

export type Facet = Awaited<ReturnType<typeof fetchFacetedSearch>>['facets']['items'][number];

export type PageType = 'brand' | 'category' | 'search';

export type LessonItem = {
    fields: {
        title: string;
        slug: string;
        date: Date;
        content: Document;
    }
}

export type LessonItems = ReadonlyArray<LessonItem>;

export type LessonQueryResult = {
    items: LessonItems;
}