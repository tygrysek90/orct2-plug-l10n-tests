import { csCZ } from "./csCZ";
import { deDE } from "./deDE";
import { enGB } from "./enGB";

/** Allowed string identifiers */
export type translationKeys = keyof typeof enGB;

/** Translation object type */
export type translation = Partial<{
    [name in translationKeys]: string;
}>;

export const strings: { [lang: string]: { [name: string]: string } } = {
    'en-GB': enGB,
}

export function addTranslation(langCode: string, property: translation) {
    Object.defineProperty(strings, langCode, { value: property });
}

addTranslation("cs-CZ", csCZ)
addTranslation("de-DE", deDE)

/** Get string in currently used locale or fallback to en-GB */
export var getString = (name: translationKeys) => {
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


