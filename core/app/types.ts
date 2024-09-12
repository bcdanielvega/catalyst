import { Document } from '@contentful/rich-text-types';
import { EntryFieldTypes, EntrySkeletonType } from 'contentful';

export type LessonItem = {
    fields: {
        title: string;
        slug: string;
        date: Date;
        lessonContent: Document;
    }
}

export type LessonItems = ReadonlyArray<LessonItem>;

export type LessonQueryResult = {
    items: LessonItems;
}

export interface TypeLessonFields {
    title?:EntryFieldTypes.Symbol
    slug: EntryFieldTypes.Symbol
    date: EntryFieldTypes.Date,
    lessonContent: EntryFieldTypes.RichText
}

export type LessonSkeleton = EntrySkeletonType<TypeLessonFields, 'lesson'>

