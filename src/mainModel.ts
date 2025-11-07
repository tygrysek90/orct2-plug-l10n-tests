/**
 * View model definition
 */

import { ElementVisibility, store } from "openrct2-flexui";

export const model = {
    visibility: {
        label: store<ElementVisibility>("visible"),
        textbox: store<ElementVisibility>("none")
    }
    
}