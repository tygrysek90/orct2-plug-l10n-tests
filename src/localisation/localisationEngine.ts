import { debug } from "../logger";
import enGB from "./enGB";

// @ts-expect-error // Members will be inserted from above
__CONDITIONAL_LANGUAGE_IMPORT__
// import laNG from "./laNG";


/** Allowed string identifiers */
export type TranslationKeys = keyof typeof enGB;

/** Translation object type */
export type Translation = Partial<{
    [name in TranslationKeys]: string;
}>;

export const strings: { [lang: string]: { [name: string]: string } } = {
    'en-GB': enGB,
}

export function addTranslation(langCode: string, property: Translation) {
    Object.defineProperty(strings, langCode, { value: property });
}

export function initTranslations() {
    // @ts-expect-error // Members will be inserted into designated place
    __CONDITIONAL_LANGUAGE_INIT__
    // addTranslation("la-NG", lang);
    debug("translations initialized")
}

initTranslations()

/** Get string in currently used locale or fallback to en-GB */
export var getString = (name: TranslationKeys) => {
    let lang = context.configuration.get<string>("general.language") ?? "en-GB";
    if (typeof strings[lang] !== "undefined") {
        if (typeof strings[lang][name] !== "undefined") {
            return strings[lang][name]
        }
        else {
            return strings['en-GB'][name]
        }
    }
    else {
        return strings['en-GB'][name]
    }
};


