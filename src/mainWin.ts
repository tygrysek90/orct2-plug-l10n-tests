/**
 * Main window
 * GUI definition
 */

import { Colour, groupbox, label, window } from "openrct2-flexui";
import { pluginName } from "./environment";
import { getString } from "./localisation/localisationEngine";

export const mainWindow = window({
    title: pluginName,
    width: 200,
    height: 200,
    colours: [Colour["Grey"], Colour["Grey"]],
    content: [
        groupbox({
            text: "Some translatable labels below",
            content: [
                label({
                    text: getString("STR_EXAMPLE_A")
                }),
                label({
                    text: getString("STR_EXAMPLE_B")
                }),
                label({
                    text: getString("STR_EXAMPLE_C")
                }),
                label({
                    text: getString("STR_EXAMPLE_D")
                })
            ]
        })
        

    ]
})