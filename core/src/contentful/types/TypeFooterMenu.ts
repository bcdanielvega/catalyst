import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeFooterMenuFields {
    internalName?: EntryFieldTypes.Symbol;
    twitterLink?: EntryFieldTypes.Symbol;
    facebookLink?: EntryFieldTypes.Symbol;
    linkedinLink?: EntryFieldTypes.Symbol;
    instagramLink?: EntryFieldTypes.Symbol;
}

export type TypeFooterMenuSkeleton = EntrySkeletonType<TypeFooterMenuFields, "footerMenu">;
export type TypeFooterMenu<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeFooterMenuSkeleton, Modifiers, Locales>;
