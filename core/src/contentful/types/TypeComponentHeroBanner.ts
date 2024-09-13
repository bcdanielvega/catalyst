import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeComponentHeroBannerFields {
    internalName?: EntryFieldTypes.Symbol;
    headline?: EntryFieldTypes.Symbol;
    bodyText?: EntryFieldTypes.RichText;
    image?: EntryFieldTypes.AssetLink;
    imageStyle?: EntryFieldTypes.Boolean;
    heroSize?: EntryFieldTypes.Boolean;
    colorPalette?: EntryFieldTypes.Symbol<"1. White (#FFFFFF)" | "2. White Smoke (#FCFCFC)" | "3. Light Gray (#F4F4F4)" | "4. Gray (#EAEAEA)" | "5. Steel Gray (#BBBBBB)" | "6. Dark Gray (#797979)" | "7. Black (#000000)">;
}

export type TypeComponentHeroBannerSkeleton = EntrySkeletonType<TypeComponentHeroBannerFields, "componentHeroBanner">;
export type TypeComponentHeroBanner<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentHeroBannerSkeleton, Modifiers, Locales>;
