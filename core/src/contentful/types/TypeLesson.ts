import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeLessonFields {
    title?: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    author?: EntryFieldTypes.Symbol;
    date?: EntryFieldTypes.Date;
    subject?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
    lessonContent?: EntryFieldTypes.RichText;
    lessonVideo?: EntryFieldTypes.AssetLink;
    image?: EntryFieldTypes.AssetLink;
}

export type TypeLessonSkeleton = EntrySkeletonType<TypeLessonFields, "lesson">;
export type TypeLesson<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeLessonSkeleton, Modifiers, Locales>;
