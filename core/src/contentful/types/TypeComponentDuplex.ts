import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeComponentDuplexFields {
    internalName?: EntryFieldTypes.Symbol;
    containerLayout?: EntryFieldTypes.Boolean;
    headline?: EntryFieldTypes.Symbol;
    bodyText?: EntryFieldTypes.RichText;
    image?: EntryFieldTypes.AssetLink;
    imageStyle?: EntryFieldTypes.Boolean;
    colorPalette?: EntryFieldTypes.Symbol<"1. White (#FFFFFF)" | "2. White Smoke (#FCFCFC)" | "3. Light Gray (#F4F4F4)" | "4. Gray (#EAEAEA)" | "5. Steel Gray (#BBBBBB)" | "6. Dark Gray (#797979)" | "7. Black (#000000)">;
}

export type TypeComponentDuplexSkeleton = EntrySkeletonType<TypeComponentDuplexFields, "componentDuplex">;
export type TypeComponentDuplex<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentDuplexSkeleton, Modifiers, Locales>;
