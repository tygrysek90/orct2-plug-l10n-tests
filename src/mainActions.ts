/**
 * GUI functions
 */

import { model } from "./mainModel";

export function onButton() {
    model.visibility.label.set("none")
    model.visibility.textbox.set("visible")
}