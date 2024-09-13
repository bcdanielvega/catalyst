import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeComponentDuplexSkeleton } from "./TypeComponentDuplex";
import type { TypeComponentHeroBannerSkeleton } from "./TypeComponentHeroBanner";
import type { TypeComponentQuoteSkeleton } from "./TypeComponentQuote";

export interface TypePageFields {
    internalName: EntryFieldTypes.Symbol;
    pageName?: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    topSection?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeComponentDuplexSkeleton | TypeComponentHeroBannerSkeleton | TypeComponentQuoteSkeleton>>;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;
