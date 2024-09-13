import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeComponentQuoteFields {
    internalName?: EntryFieldTypes.Symbol;
    quote?: EntryFieldTypes.RichText;
    quoteAlignment?: EntryFieldTypes.Boolean;
    image?: EntryFieldTypes.AssetLink;
    imagePosition?: EntryFieldTypes.Boolean;
    colorPalette?: EntryFieldTypes.Symbol<"1. White (#FFFFFF)" | "2. White Smoke (#FCFCFC)" | "3. Light Gray (#F4F4F4)" | "4. Gray (#EAEAEA)" | "5. Steel Gray (#BBBBBB)" | "6. Dark Gray (#797979)" | "7. Black (#000000)">;
}

export type TypeComponentQuoteSkeleton = EntrySkeletonType<TypeComponentQuoteFields, "componentQuote">;
export type TypeComponentQuote<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentQuoteSkeleton, Modifiers, Locales>;
