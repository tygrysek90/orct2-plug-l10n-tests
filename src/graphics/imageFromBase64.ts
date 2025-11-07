/**
 * This source file is 99.9% based on the excerpts from
 * the OpenRCT2 plug-in "WorldPainter"
 * licensed under the GNU General Public License version 3.
 *
 * "WorldPainter" Copyright (c) 2024 Sadret 
 * 
 * retrieved from 
 * https://github.com/Sadret/openrct2-worldpainter/blob/v1.0.0/src/types.ts
 * https://github.com/Sadret/openrct2-worldpainter/blob/v1.0.0/src/Images.ts
 * 
 * Thanks to Sadret for this nice function :)
**/

import { pluginName } from "../environment";



export type ImageData = {
    image: number;
    width: number;
    height: number;
};


export function createImageFromBase64(base64: string): ImageData  {
    const range = ui.imageManager.allocate(1);
    if (!range) throw new Error(`[${pluginName}] Cannot allocate image from image manager.`);
    const id = range.start;
    ui.imageManager.setPixelData(id, {
        type: "png",
        palette: "closest",
        data: base64,
    });
    const info = ui.imageManager.getImageInfo(id);
    if (!info) throw new Error(`[${pluginName}] Cannot get image info from image manager.`);
    return {
        image: info.id,
        width: info.width,
        height: info.height,
    };
}
